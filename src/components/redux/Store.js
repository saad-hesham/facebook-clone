import user from "../../images/photo-1611042553365-9b101441c135.jfif";
import user2 from "../../images/young-bearded-man-with-striped-shirt_273609-5677.avif";
import user3 from "../../images/photo-1570295999919-56ceb5ecca61.jfif";
import user4 from "../../images/user.webp";
import care from "../../images/care-24x24-1991058.png"
import like from "../../images/like-24x24-1991059.png"
import haha from "../../images/haha-24x24-1991060.png"
import angry from "../../images/angry-24x24-1991061.png"
import love from "../../images/love-24x24-1991064.png"

import { configureStore, createSlice } from "@reduxjs/toolkit";

const posts = createSlice({
    name: "posts",
    initialState: {
        openAddpost: false,
        settings: false,
        detailsSetting: false,
        parent: true,
        help: false,
        display: false,
        mode: true,
        notifications: false,
        messages: false,
        image: false,
        editMenu:false,
        editState:false,
        chatState:false,
        editedPost:{img:"",content:"",id:0},
        notiArray: [
            { img: user, para: "it's Katrina Mares's birthday today. let her know you're thinking aobut her!", react: care, time: "27 min" },
            { img: user2, para: "Ali Ashraf reacted to a video that you shared.", react: like, time: "1 day" },
            { img: user3, para: "ShehabuDeen Jalal reacted to a video that you shared.", react: haha, time: "3 hours" },
            { img: user4, para: "ShehabuDeen Jalal and 2 other people reacted to a video that you shared.", react: angry, time: "3 hours" },
            { img: user, para: "it's Katrina Mares's birthday today. let her know you're thinking aobut her!", react: care, time: "27 min" },
            { img: user2, para: "Ali Ashraf reacted to a video that you shared.", react: like, time: "1 day" },
            { img: user3, para: "ShehabuDeen Jalal reacted to a video that you shared.", react: love, time: "3 hours" },
            { img: user4, para: "ShehabuDeen Jalal and 2 other people reacted to a video that you shared.", react: love, time: "3 hours" },

        ],
        messageArr: [
            { img: user, para: "hey", name: "katarina" },
            { img: user3, para: "are you coming for dinner tonight?", name: "Noah" },
            { img: user2, para: "did you pass ur exam?", name: "William" },
        ],
        posts: [],
    },
    reducers: {
        togglePosts: function (state) {
            if (state.openAddpost == true) {
                state.openAddpost = false;


            }
            else {
                state.openAddpost = true;


            }

        },
        toggleSetting: function (state, event) {
            if (state.settings == true) {
                state.settings = false;
                state.parent = true;
                state.notifications = false;
                state.messages = false
                state.detailsSetting = false
                state.help = false
                state.display = false
                state.parent = false

            }
            else {
                state.settings = true;
                state.parent = true;
                state.messages = false;
                state.notifications = false;

            }

        },
        toggleSettingDetails: function (state) {
            if (state.detailsSetting == true) {
                state.detailsSetting = false;
                state.parent = true;

            }
            else {
                state.detailsSetting = true;
                state.parent = false;

            }

        },
        togglehelp: function (state) {
            if (state.help == true) {
                state.help = false;
                state.parent = true;

            }
            else {
                state.help = true;
                state.parent = false;

            }
        },
        display: function (state) {
            if (state.display == true) {
                state.display = false;
                state.parent = true;

            }
            else {
                state.display = true;
                state.parent = false;

            }
        },
        togglemode: function (state) {
            state.mode = false;
            localStorage.setItem("state", state.mode);
            localStorage.setItem("mode", "dark");
            document.body.classList.remove("light");
            document.body.classList.add(localStorage.getItem("mode"));


        },
        toggleModeReverse: function (state) {
            state.mode = true;
            localStorage.setItem("state", state.mode);
            localStorage.setItem("mode", "light");
            document.body.classList.remove("dark");
            document.body.classList.add(localStorage.getItem("mode"));

        },
        openNot: function (state) {
            if (state.notifications == true) {
                state.notifications = false;
            }
            else {
                state.notifications = true;
                state.messages = false
                state.settings = false
                state.detailsSetting = false
                state.help = false
                state.display = false
                state.parent = false



            }

        },
        openMessages: function (state, event) {
            if (state.messages == true) {
                state.messages = false;
            }
            else {
                state.notifications = false;
                state.messages = true
                state.settings = false
                state.detailsSetting = false
                state.help = false
                state.display = false
                state.parent = false


            }

        },
        closeAll: function closeAll(state) {
            state.messages = false
            state.settings = false
            state.detailsSetting = false
            state.help = false
            state.display = false
            state.notifications = false
            state.parent = false

        },
        addpost: function (state, action) {
            var regexp = /.*\S.*/;
            if(localStorage.getItem("posts")==null){
                localStorage.setItem("posts",JSON.stringify(state.posts))
            }

            if (JSON.parse(localStorage.getItem("posts")) != []) {
                state.posts = [...JSON.parse(localStorage.getItem("posts"))]
            }
            if (action.payload.content.match(regexp)!=null && action.payload.loading==false) {
                state.posts.push(action.payload);
                localStorage.setItem("posts", JSON.stringify(state.posts))
                window.location.reload()

            }
             if(action.payload.img!="" && action.payload.content.length==0 && action.payload.loading==false){
                state.posts.push(action.payload);
                localStorage.setItem("posts", JSON.stringify(state.posts))
                window.location.reload()


            }
        },
        setReact:function(state,action){
            state.posts=JSON.parse(localStorage.getItem("posts"));
            state.posts[action.payload.id].react=action.payload.react;
            state.posts[action.payload.id].word=action.payload.word;
            state.posts[action.payload.id].palletStatue=false

            localStorage.setItem("posts", JSON.stringify(state.posts))
            
            
        }
        ,activePallet:function(state,action){
            state.posts=JSON.parse(localStorage.getItem("posts"));
            state.posts[action.payload].palletStatue=true
            localStorage.setItem("posts", JSON.stringify(state.posts))
            

        },
        disactivePallet:function(state,action){
            state.posts=JSON.parse(localStorage.getItem("posts"));
            state.posts[action.payload].palletStatue=false
            localStorage.setItem("posts", JSON.stringify(state.posts))
            

        },
        deletePost:function(state,action){
            state.posts=JSON.parse(localStorage.getItem("posts"));
            const filterd = state.posts.filter(post => post.id!= action.payload);
            state.posts = filterd;
            localStorage.setItem("posts", JSON.stringify(state.posts))
        },
        openToggleEdit:function(state,action){
          state.posts = JSON.parse(localStorage.getItem("posts"));
          if(state.posts[action.payload].edit!=true){
            state.posts[action.payload].edit=true
          }
          else{
            state.posts[action.payload].edit=false

          }
          localStorage.setItem("posts",JSON.stringify(state.posts))
        },
        openEdit:function(state,action){
            state.editState=true;
            state.posts = JSON.parse(localStorage.getItem("posts"));
            state.editedPost.content=state.posts[action.payload].content
            state.editedPost.img=state.posts[action.payload].img
            state.editedPost.id=state.posts[action.payload].id
            localStorage.setItem("edited",JSON.stringify(state.editedPost))
        },
        closeEdit:function(state,action){
            state.editState=false;
        },
        setEdit:function(state,action){
            state.posts = JSON.parse(localStorage.getItem("posts"))
            state.posts[action.payload.id].content=action.payload.content
            state.posts[action.payload.id].img=action.payload.img
            localStorage.setItem("posts",JSON.stringify(state.posts))
            state.editState = false

        },
        toggleChat:function(state,action){
            
            if(state.chatState!=true){
              state.chatState=true;
              state.messages=false;
            }
            else{
                state.chatState=false
  
            }
          },
        
    }

})

export const store = configureStore({ reducer: posts.reducer });
export const actions = posts.actions