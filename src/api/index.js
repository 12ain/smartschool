export default {
    api:{
        user:{
            login: "/user/login",
            register: "/user/register",
            update: "/user/update",
        },
        test:{
            updateTest: "/test/updateTest",
            deleteTest:"/test/deleteTest",
            insertTest:"/test/insertTest",
            checkcollege: "/test/checkcollege",

        },
        testtell:{
            updateTell: "/testtell/updateTell",
            checkTell: "/testtell/checkTell",
            deleteTell:"/testtell/deleteTell",

        },
        lf:{
            testAllLost:"/lf/testAllLost",
            testAllFound:"/lf/testAllFound",
            testDeleteTo:"/lf/testDeleteTo",
            testAllThing:"/lf/testAllThing",
            testDeleteTo:"/lf/testDeleteTo",
        },
        record:{
            wwmessmy:"/record/wwmessmy",
            wymessmy:"/record/wymessmy",
            deleteTo:"/record/deleteTo",
            delByW:"/record/delByW",
            rmess:"/record/rmess",
            rmessmy:"/record/rmessmy",
        },
        trade:{
            rmess:"/trade/rmess",
            deleteTo:"/trade/deleteTo",
            rmessmy:"/trade/rmessmy",
            deleteTo:"/trade/deleteTo",
        }
    }
}
