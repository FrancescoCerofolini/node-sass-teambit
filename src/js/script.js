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
        container3Boxes: [
            {
                img: 'employee-feedback',
                title: 'Feedback to help teammates improve',
                subtitle: 'Empower your teammates to know in real time what they are doing well and what they need to improve.',
                icon: 'communication',

            },
            {
                img: 'employee-survey',
                title: 'Surveys to help the team be better',
                subtitle: 'Get real-time insights into your team with research-backed, lightweight ande regular surveys.',
                icon: 'insights',
            },
            {
                img: 'performance-review',
                title: 'Reviews to help teammates get a fair evaluation',
                subtitle: 'Make better compensation and promotion decisions wuth objective and quick performance reviews.',
                icon: 'review',
            },
            {
                img: 'employee-recognition',
                title: 'Praise to help teammates feel valued',
                subtitle: 'Make it a habit to recognize and praise prople who do great work.',
                icon: 'recognition',
            }
        ]
    },
    methods: {

    },
});

Vue.config.devtools = true