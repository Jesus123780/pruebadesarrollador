import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ContextLayout from './Context';
import { Suspense } from 'react';
import { Loading } from './components/Loading';
import { Index } from './components/EmployeModule';
import { NotFound } from './components/NotFound';

function App() {

    return (
        <BrowserRouter>
            <Switch>
                <ContextLayout.Consumer>
                    {
                        ({ error }) => <Index error={error}>
                            <Suspense fallback={<Loading />} >
                                <Switch>
                                    <Route exact path='/' component={Index} />
                                    {/* Pagina no encontrada */}
                                    <Route component={NotFound} />
                                </Switch>
                            </Suspense>
                        </Index>
                    }

                </ContextLayout.Consumer>
            </Switch>
        </BrowserRouter>
    );
}

export default App;