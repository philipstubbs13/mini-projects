import React from 'react'
// import { withInfo } from '@storybook/addon-info';
import {wInfo} from './utils';

import {storiesOf} from '@storybook/react'
import {Button} from './Button'
import { color } from '@storybook/addon-knobs/react';

storiesOf('Button', module).addWithJSX('with background', wInfo(`
  description of the component

  ~~~js
  <Button>Click here</Button>
  ~~~

  `)(() => (
  <Button bg="plaegoldenron">Hello world</Button>
)))
.addWithJSX('with background 2', () => (
  <Button bg={color('bg', 'green', 'group1')}>Hello world 2</Button>
))