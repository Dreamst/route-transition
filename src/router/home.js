import Composants from '../views/Composants.vue';
import Typographie from '../views/Typographie.vue';
import Home from '../views/Home.vue';
// Subcomponents

import Intro from '../components/Composants/Intro.vue';
import Formulaire from '../components/Composants/Formulaire.vue';

export default  {
    mode: 'history',
    path: '/home',
    name: 'home',
    component: Home,
    children: [
        {
            name: 'composants',
            path: '/composants',
            components: {
                view1: Composants
            },
            children: [
                {
                    name: 'intro',
                    path: '/composants/introduction',
                    component: Intro,
                },
                {
                    name: 'formulaire',
                    path: '/composants/formulaire',
                    component: Formulaire,
                }
            ]
        },
        {
            name: 'typographie',
            path: '/typographie',
            components: {
                view2: Typographie
            }
        }
    ]
}