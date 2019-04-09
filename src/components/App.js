import React, { Component } from 'react';

import Header from './Header';

import Post from './Post';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {
          id: 1,
          name: 'Marlene Fonseca',
          avatar: 'https://randomuser.me/api/portraits/women/49.jpg',
          time: 'há 3 min',
          body:
            'Mussum Ipsum, cacilds vidis litro abertis. Viva Forevis aptent taciti sociosqu ad litora torquent. Quem manda na minha terra sou euzis! Quem num gosta di mé, boa gentis num é. Casamentiss faiz malandris se pirulitá.',
        },
        {
          id: 2,
          name: 'Samuel Cardoso',
          avatar: 'https://randomuser.me/api/portraits/men/66.jpg',
          time: 'há 10 min',
          body:
            'Mussum Ipsum, cacilds vidis litro abertis. Viva Forevis aptent taciti sociosqu ad litora torquent. Quem manda na minha terra sou euzis! Quem num gosta di mé, boa gentis num é. Casamentiss faiz malandris se pirulitá.',
        },
        {
          id: 3,
          name: 'Arlete Garcia',
          avatar: 'https://randomuser.me/api/portraits/women/88.jpg',
          time: 'há 25 min',
          body:
            'Mussum Ipsum, cacilds vidis litro abertis. Viva Forevis aptent taciti sociosqu ad litora torquent. Quem manda na minha terra sou euzis! Quem num gosta di mé, boa gentis num é. Casamentiss faiz malandris se pirulitá.',
        },
        {
          id: 4,
          name: 'Feliciano Kafusaka',
          avatar: 'https://randomuser.me/api/portraits/men/90.jpg',
          time: 'há 30 min',
          body:
            'Mussum Ipsum, cacilds vidis litro abertis. Viva Forevis aptent taciti sociosqu ad litora torquent. Quem manda na minha terra sou euzis! Quem num gosta di mé, boa gentis num é. Casamentiss faiz malandris se pirulitá.',
        },
      ],
    };
  }

  render() {
    const { posts } = this.state;
    return (
      <div>
        <Header />
        <div className="post-container">
          {posts && posts.map(post => <Post key={post.id} data={post} />)}
        </div>
      </div>
    );
  }
}
