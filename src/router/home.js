import Route1 from '../views/Route1.vue';
import Route2 from '../views/Route2.vue';
import Home from '../views/Home.vue';
// Subcomponents

import Experience from '../components/route1/Experience.vue';
import Languages from '../components/route1/Languages.vue';

export default  {
    mode: 'history',
    path: '/home',
    name: 'home',
    component: Home,
    children: [
        {
            name: 'route1',
            path: '/route1',
            components: {
                view1: Route1
            },
            children: [
                {
                    name: 'experience',
                    path: '/route1/experience',
                    component: Experience,
                },
                {
                    name: 'languages',
                    path: '/route1/languages',
                    component: Languages,
                }
            ]
        },
        {
            name: 'route2',
            path: '/route2',
            components: {
                view2: Route2
            }
        }
    ]
}