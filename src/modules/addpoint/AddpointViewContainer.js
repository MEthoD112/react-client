import { compose, withState } from 'recompose';

import AddpointScreen from './AddpointView';

export default compose(withState('isExtended', 'setIsExtended', false))(
  AddpointScreen,
);
