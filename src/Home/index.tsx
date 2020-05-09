import React, {Fragment, useState} from 'react';
import moment from 'moment';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';

import {Formik} from 'formik';
import * as yup from 'yup';

import Button from '../components/Button';
import Avatar from '../components/Avatar';
import Attribute from '../components/Attribute';

import {
  Header,
  Content,
  Footer,
  Wrapper,
  Error,
  TextInput,
  WrapperInput,
  Actions,
} from './styles';

type GithubUserInfo = {
  avatar_url: String;
  url: String;
  name: String;
  public_repos: Number;
  followers: Number;
  following: Number;
  created_at: String;
};

type GithubUserRepos = {
  name: String;
  created_at: String;
};
const Home: React.FC = (values) => {
  const [userInfo, setUserInfo] = useState<GithubUserInfo>({
    avatar_url: '',
    url: '',
    name: '',
    public_repos: 0,
    followers: 0,
    following: 0,
    created_at: '',
  });

  const [userRepos, setUserRepos] = useState<Array<GithubUserRepos>>([]);

  const headers = new Headers();
  headers.append('Authorization', 'c3de1c3de057a6d7ef9a351a53094f263219ed93');

  async function getUserInformationAndRepositories(username: String) {
    username.trim();
    await fetch(`https://api.github.com/users/${username}`, {headers})
      .then((response) => response.json())
      .then((userInformation) => {
        setUserInfo(userInformation);
      });

    await fetch(`https://api.github.com/users/${username}/repos`, {headers})
      .then((response) => response.json())
      .then((userRepositories) => {
        if (!userRepositories) {
          throw 'No repos from the user.';
        }
        userRepositories.sort((a: GithubUserRepos, b: GithubUserRepos) => {
          if (a.created_at < b.created_at) {
            return 1;
          }
          if (a.created_at > b.created_at) {
            return -1;
          }
          return 0;
        });
        setUserRepos(userRepositories.slice(0, 4));
      });
  }

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <Header>
          <Formik
            initialValues={{username: ''}}
            onSubmit={(values) => {
              getUserInformationAndRepositories(values.username);
            }}
            validationSchema={yup.object().shape({
              username: yup.string().required(),
            })}>
            {({
              values,
              errors,
              touched,
              isValid,
              handleChange,
              setFieldTouched,
              handleSubmit,
            }) => (
              <Fragment>
                <WrapperInput>
                  <TextInput
                    value={values.username}
                    autoCapitalize="none"
                    onChangeText={handleChange('username')}
                    onBlur={() => setFieldTouched('username')}
                    placeholder="Enter the username"
                  />
                  {touched.username && errors.username && (
                    <Error>{errors.username}</Error>
                  )}
                </WrapperInput>
                <Actions>
                  <Button title="Search" onPress={handleSubmit} />
                </Actions>
              </Fragment>
            )}
          </Formik>
        </Header>

        <Content>
          <Avatar uri={userInfo.avatar_url} />
          <Wrapper>
            <Attribute attributeName="Repos" value={userInfo.public_repos} />
            <Attribute attributeName="Followers" value={userInfo.followers} />
            <Attribute attributeName="Following" value={userInfo.following} />
          </Wrapper>
        </Content>
        <Footer>
          {userRepos.map((repo, key) => (
            <Text key={key}>
              {key + 1} - {repo.name}
            </Text>
          ))}
        </Footer>
      </SafeAreaView>
    </>
  );
};
export default Home;
