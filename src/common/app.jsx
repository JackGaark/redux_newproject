import React from 'react';
import { Container } from 'reactstrap';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';
import { useLocation } from 'react-router-dom';
import './custom.scss';
import Menu from './menu';
import Footer from './footer';
import Home from '../home/home';
import NotFound from '../404/404';
import TodosClassic from '../todos/state/todos';
import TodosContextHooks from '../todos/context-use-reducer/todos';
import ReduxClassic from '../todos/redux/classic/connect/todos';
import ReduxHooks from '../todos/redux/classic/hooks/todos';
import StarterClassic from '../todos/redux/toolkit/connect/todos';
import StarterHooks from '../todos/redux/toolkit/hooks/todos';
import Reddits from '../reddit/reddits';

import About from '../about/about';
//const About = React.lazy(() => import('./about/about'));

function Content() {
  const location = useLocation();

  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  });
  return transitions.map(({ item, props, key }) => (
    <animated.div
      key={key}
      style={{
        ...props,
        position: 'absolute',
        width: '100%',
        paddingBottom: '100px',
      }}
    >
      {/* <React.Suspense fallback={<h1>Loading...</h1>}   > */}
      <Switch location={item}>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/todos/ClassicState' component={TodosClassic} />
        <Route path='/todos/ContextHooks' component={TodosContextHooks} />
        <Route path='/todos/ReduxClassic' component={ReduxClassic} />
        <Route path='/todos/ReduxHooks' component={ReduxHooks} />
        <Route path='/todos/ToolkitClassic' component={StarterClassic} />
        <Route path='/todos/ToolkitHooks' component={StarterHooks} />
        <Route path='/reddits' component={Reddits} />
        <Route component={NotFound} />
      </Switch>
      {/* </React.Suspense> */}
    </animated.div>
  ));
}

export default function App() {
  return (
    <BrowserRouter>
      <div
        style={{
          minHeight: '100vh',
          // display: 'flex',
          // flexDirection: 'column',
          overflowX: 'hidden',
        }}
      >
        <Menu />
        <Container className='position-relative '>
          <Content />
        </Container>
        <Footer className='bg-dark text-light py-3 fixed-bottom' />
      </div>
    </BrowserRouter>
  );
}
