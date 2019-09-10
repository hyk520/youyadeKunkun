
Mock.mock('/userlist','post',function(options){
    var {img}=JSON.parse(option.body);
    return {
        "status":200,
        "list|3":[{
            "id|+1":0,
            "img":"@cimage(400x100)"
        }]
        
    }
})