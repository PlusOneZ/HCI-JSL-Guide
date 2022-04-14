
let rooms_org = [
    {
        name: "401",
        type: "会议室",
        usage: "大型会议",
        teachers: [

        ],
        students: [

        ],
        chargedBy: {
            name: "保安",
            phone: "123456789"
        },
        status: "空闲",
        pics: [
            "images/room/401-1.png",
            "images/room/401-2.png",
        ],
        tags: [
            "投影仪",
            "投影幕",
        ]
    },
    {
        name: "407",
        type: "研究生工作室",
        usage: "科研活动、办公",
        teachers: [

        ],
        students: [
            "张三",
            "李四",
        ],
        chargedBy: {
            name: "张晶",
            phone: "123456789"
        },
        status: "正在使用",
        pics: [
            "images/room/407-1.png",
            "images/room/407-2.png",
            "images/room/407-3.png",
        ],
        tags: [
            "功能齐全",
            "机器学习",
            "计算机视觉",
            "助教",
        ],
    },
    {
        name: "408",
        type: "研究生工作室",
        usage: "科研活动、办公",
        teachers: [

        ],
        students: [
            "张三",
            "李四",
            "王五",
            "赵六",
            "钱七",
            "孙八",
            "周九",
            "吴十",
        ],
        chargedBy: {
            name: "杨旻",
            phone: "123456789"
        },
        status: "正在使用",
        pics: [
            "images/room/408-1.png",
            "images/room/408-2.png",
        ],
        tags: [
            "功能齐全",
            "机器人",
            "实时系统",
            "助教",
        ],
    },
    {
        name: "409",
        type: "研究生工作室",
        usage: "科研活动、办公",
        teachers: [

        ],
        students: [
            "张三",
            "李四",
        ],
        chargedBy: {
            name: "张晶",
            phone: "123456789"
        },
        status: "正在使用",
        pics: [
            "images/room/409-1.png",
            "images/room/409-2.png",
            "images/room/409-3.png",
        ],
        tags: [
            "功能齐全",
            "机器人",
            "实时系统",
            "助教",
        ],
    },
    {
        name: "410",
        type: "研究生工作室",
        usage: "科研活动、办公",
        teachers: [

        ],
        students: [
            "张三",
            "李四",
        ],
        chargedBy: {
            name: "张晶",
            phone: "123456789"
        },
        status: "正在使用",
        pics: [
            "images/room/410-1.png",
            "images/room/410-2.png",
        ],
        tags: [
            "功能齐全",
            "语音识别",
            "计算机视觉",
            "助教",
        ],
    },
    {
        name: "411",
        type: "办公室",
        usage: "教师办公",
        teachers: [
            "朱宏明",
            "史扬",
            "赵钦佩",
            "户现锋"
        ],
        students: [

        ],
        chargedBy: {
            name: "张晶",
            phone: "123456789"
        },
        status: "正在使用",
        pics: [
            "images/room/411-1.png",
            "images/room/411-2.png",
        ],
        tags: [
            "微波炉",
            "讨论桌",
            "绿植",
        ],
    },
    {
        name: "412",
        type: "办公室",
        usage: "教师办公",
        teachers: [
            "孙萍",
            "刘岩",
        ],
        students: [

        ],
        chargedBy: {
            name: "张晶",
            phone: "123456789"
        },
        status: "正在使用",
        pics: [
            "images/room/412-1.png",
            "images/room/412-2.png",
        ],
        tags: [
            "讨论桌",
        ],
    },
    {
        name: "413",
        type: "研究生工作室",
        usage: "科研活动、办公",
        teachers: [

        ],
        students: [
            "张三",
            "李四",
        ],
        chargedBy: {
            name: "张晶",
            phone: "123456789"
        },
        status: "正在使用",
        pics: [
            "images/room/413-1.png",
        ],
        tags: [
            "功能齐全",
            "自然语言处理",
            "助教",
        ],
    },
    {
        name: "414",
        type: "教室",
        usage: "授课、自习",
        teachers: [
        ],
        students: [
        ],
        chargedBy: {
            name: "杨旻",
            phone: "123456789"
        },
        status: "空闲",
        pics: [
            "images/room/414-1.png",
        ],
        tags: [
            "功能齐全",
            "投影仪",
        ]
    },
    {
        name: "415",
        type: "教室",
        usage: "授课、自习",
        teachers: [
        ],
        students: [
        ],
        chargedBy: {
            name: "杨旻",
            phone: "123456789"
        },
        status: "空闲",
        pics: [
            "images/room/415-1.png",
            "images/room/415-2.png",
        ],
        tags: [
            "功能齐全",
            "投影仪",
        ]
    },
    {
        name: "416",
        type: "教室",
        usage: "授课、自习",
        teachers: [
        ],
        students: [
        ],
        chargedBy: {
            name: "杨旻",
            phone: "123456789"
        },
        status: "空闲",
        pics: [
            "images/room/416-1.png",
        ],
        tags: [
            "功能齐全",
            "投影仪",
        ]
    },
    {
        name: "417",
        type: "空房间",
        usage: "不可用",
        teachers: [
        ],
        students: [
        ],
        chargedBy: {
            name: "杨旻",
            phone: "123456789"
        },
        status: "装修中",
        pics: [
            "images/room/417-1.png",
        ],
        tags: [
            "暂不可用"
        ]
    },{
        name: "417",
        type: "研究生工作室",
        usage: "科研活动、办公",
        teachers: [

        ],
        students: [
            "张三",
            "李四",
            "王五",
            "赵六",
            "钱七",
            "孙八",
            "周九",
            "吴十",
        ],
        chargedBy: {
            name: "杨旻",
            phone: "123456789"
        },
        status: "正在使用",
        pics: [
            "images/room/408-1.png",
            "images/room/408-2.png",
        ],
        tags: [
            "功能齐全",
            "机器人",
            "实时系统",
            "助教",
        ],
    },

];

var rooms = rooms_org;

function buildInfoBofy(item) {
    // <div class="info">
    //     <div class="visual-info">
    //         <div class="img-box">
    //             <img src="images/room/401-1.png" alt="image of room">
    //         </div>

    //         <div>
    //             <span class="room-title">401</span>
    //         </div>
    //     </div>

    //     <div class="room-detailed-info">
    //         <div class="type">
    //             <span>类型：</span><span>会议室</span>
    //         </div>
    //         <div class="usage">
    //             <span>用途：</span><span>大型会议</span>
    //         </div>
    //         <div class="chargedBy">
    //             <span>负责人：</span><span>张三</span> <span class="phone">123456789</span>
    //         </div>
    //         <div class="status">
    //             <span>状态：</span><span>空闲</span>
    //         </div>
    //         <div class="tags">
    //             <div class="tag">投影仪</div>
    //             <div class="tag">投影幕</div>
    //         </div>
    //     </div>
    // </div>
    var info = document.createElement("div");
    info.className = "info";

    info.innerHTML = "<div class='visual-info'>" +
        "<div class='img-box'>" +
        "<img src='" + item.pics[0] + "' alt='image of room'>" +
        "</div>" +
        "<div>" +
        "<span class='room-title'>" + item.name + "</span>" +
        "</div>" +
        "</div>" +
        "<div class='room-detailed-info'>" +
        "<div class='type'>" +
        "<span>类型：</span><span>" + item.type + "</span>" +
        "</div>" +
        "<div class='usage'>" +
        "<span>用途：</span><span>" + item.usage + "</span>" +
        "</div>" +
        "<div class='chargedBy'>" +
        "<span>负责人：</span><span>" + item.chargedBy.name + "</span> <span class='phone'>" + item.chargedBy.phone + "</span>" +
        "</div>" +
        (item.teachers.length ?
            "<div class='teachers'>" +
            "<span>教师：</span>" +
            "<div class='teacher-list'>" +
            item.teachers.map(function (teacher) {
                return "<span>" + teacher + "</span>";
            }).join("") +
            "</div>" +
            "</div>" : ""
        ) +
        (item.students.length ?
            "<div class='students'>" +
            "<span>学生：</span>" +
            "<div class='student-list'>" +
            item.students.map(function (student) {
                return "<span>" + student + "</span>";
            }).join("") +
            "</div>" +
            "</div>" : ""
        ) +
        "<div class='status'>" +
        "<span>状态：</span><span>" + item.status + "</span>" +
        "</div>" +
        (item.tags.length ?
            "<div class='tags'>" +
            item.tags.map(function (tag) {
                return "<div class='tag'>" + tag + "</div>";
            }).join("") +
            "</div>" : ""
        ) +
        "</div>";

    return info.outerHTML;
}

let currentMiddle = 0;

function centerWith(n) {
    if (n < 0) {
        // do nothing
        return;
    }
    if (n > rooms.length - 1) {
        // do nothing
        return;
    }
    currentMiddle = n;
    if (n - 1 >= 0) {
        $("#con2").html(buildInfoBofy(rooms[n - 1]));
    } else {
        $("#con2").html("");
    }
    if (n - 2 >= 0) {
        $("#con1").html(buildInfoBofy(rooms[n - 2]));
    } else {
        $("#con1").html("");
    }
    $("#con3").html(buildInfoBofy(rooms[n]));
    if (n + 1 <= rooms.length - 1) {
        $("#con4").html(buildInfoBofy(rooms[n + 1]));
    } else {
        $("#con4").html("");
    }
    if (n + 2 <= rooms.length - 1) {
        $("#con5").html(buildInfoBofy(rooms[n + 2]));
    } else {
        $("#con5").html("")
    }
}

// get url params
function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
            return pair[1];
        }
    }
    return false;
}

// get room index with room name
function getRoomIndex(name) {
    for (var i = 0; i < rooms.length; i++) {
        if (rooms[i].name == name) {
            return i;
        }
    }
    return -1;
}


function setup() {
    if (getQueryVariable("room")) {
        // if room exists
        var roomIndex = getRoomIndex(getQueryVariable("room"));
        if (roomIndex != -1) {
            centerWith(roomIndex);
            currentMiddle = roomIndex;
            return;
        }
    }
    if (rooms.length === 0) {
        // if no room
        $("#con1").html("");
        $("#con2").html("");
        $("#con3").html("No such room");
        $("#con4").html("");
        $("#con5").html("");
        return;
    }
    currentMiddle = Math.floor(rooms.length / 2);
    let middleIndex = currentMiddle;
    centerWith(middleIndex)
}


function search(key) {
    return rooms_org.filter(function (item) {
        if (item.name.indexOf(key) != -1) {
            return true;
        }
        for (let i = 0; i < item.students.length; i++) {
            if (item.students[i].indexOf(key) != -1) {
                return true;
            }
        }
        for (let i = 0; i < item.teachers.length; i++) {
            if (item.teachers[i].indexOf(key) != -1) {
                return true;
            }
        }
        for (let i = 0; i < item.tags.length; i++) {
            if (item.tags[i].indexOf(key) != -1) {
                return true;
            }
        }
        if (item.usage.indexOf(key) != -1) {
            return true;
        }
        if (item.type.indexOf(key) != -1) {
            return true;
        }
        return false;
    });
}

