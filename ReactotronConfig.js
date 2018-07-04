import { reactotronRedux } from 'reactotron-redux'
import Reactotron from 'reactotron-react-native'

Reactotron.configure({ name: 'boilerplate' })
  .useReactNative()
  .use(reactotronRedux())
  .connect()