import Composants from '../components/Composants.vue';
import Typographie from '../components/Typographie.vue';
import Home from '../components/Home.vue';

export default  {
    path: '/',
    name: 'home',
    component: Home,
    children: [
        {
            name: 'composants',
            path: '/composants',
            components: {
                view1: Composants
            }
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