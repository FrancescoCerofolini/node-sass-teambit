var app = new Vue({
    el: '#app',
    data: {
        container1Boxes:[
            {
                img: 'hardcore',
                caption: 'They are hardcore, formal and disconnected'
            },
            {
                img: 'nofeedback',
                caption: 'They don\'t encourage regular feedback'
            },
            {
                img: 'notsafe',
                caption: 'They don\'t make it safe to speak up'
            },
            
        ],
        container2Boxes: [
            {
                img: 'lightweight',
                caption: 'It\'s lightweight fun and interconnected',
            },
            {
                img: 'feedbacksuggestions',
                caption: 'It encourages regular feedback with contextual requests',
            },
            {
                img: 'safe',
                caption: 'It creates a safe environment for dialog',
            },
            
        ],
    },
    methods: {

    },
});

Vue.config.devtools = true