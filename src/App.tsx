import './app.scss'
import Diagram from './components/diagram/Diagram'
import Filters from './components/filters/Filters'

import { store } from './redux/store'
import { Provider } from 'react-redux'

function App() {
    return (
        <Provider store={store}>
            <div className="app">
                <Filters />
                <Diagram />
            </div>
        </Provider>
    )
}

export default App
