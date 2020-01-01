export default {
    api:{
        user:{
            login: "/user/login",
            register: "/user/register",
            update: "/user/update"
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
            insertTell:"/testtell/insertTell",
        },
        lf:{
            testAllLost:"/lf/testAllLost",
            testAllFound:"/lf/testAllFound",
            testDeleteTo:"/lf/testDeleteTo",
            testAllThing:"/lf/testAllThing",
            testInsertTo :"/lf/testInsertTo",
            testUpdateTo :"/lf/testUpdateTo"
        },
        record:{
            wwmessmy:"/record/wwmessmy",
            wymessmy:"/record/wymessmy",
            deleteTo:"/record/deleteTo",
            delByW:"/record/delByW",
            rmess:"/record/rmess",
            rmessmy:"/record/rmessmy",
            insertTo: "/record/insertTo",
            updateTo: "/record/updateTo"
        },
        trade:{
            rmess:"/trade/rmess",
            deleteTo:"/trade/deleteTo",
            rmessmy:"/trade/rmessmy",
            insertTo :"/trade/insertTo",
            updateTo:"trade/updateTo"
        }
    }
}
