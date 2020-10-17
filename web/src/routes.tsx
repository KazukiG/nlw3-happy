import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'; /*Algums pacotes do React, não vem com informações para a sua usabilidade 
                                                                   Então, rode o comando de sugestão de correção, recomendo tbm o uso da tag -D, 
                                                                   para usar apenas no seu desenvolvimento*/
import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';
import Orphanage from './pages/Orphanage';
import CrateOrphanage from './pages/CreateOrphanage';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/app" component={OrphanagesMap} />

                <Route path="/orphanages/create" component={CrateOrphanage} />
                <Route path="/orphanages/:id" component={Orphanage} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;