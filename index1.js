// main document ready function to check if dom is loaded fully or not

let myFacebookToken;

$(document).ready(() => {

    myFacebookToken = prompt("Please enter your Facebook Token:", "");

    if (myFacebookToken == null || myFacebookToken == "") {

        alert("No usr Token found");

    } else {

        getNewsFeed();

    } // end if condition

}); // end document.ready function

let getNewsFeed = () => {


    // API call to get user details

    $.ajax({
        type: 'GET',
        dataType: 'json',
        async: true,
        url: 'https://graph.facebook.com/me?fields=name,feed.type(large)&access_token=' + myFacebookToken,

        success: (response) => {
        	console.log(response);
            let i;
            let j;
            
            
            for(i=0,j=0;i<=10,j<=10;i++,j++){
                let allUpdates=response.feed.data[i];
                console.log(allUpdates);                
                let eachStory=allUpdates.story
                let eachCreated_time=allUpdates.created_time
                $("#latestNewsFeed").append("Latest News feed " + j + ":"+"<br/>" );
                $("#latestNewsFeed").append(eachStory+"<br/>")
                $("#latestNewsFeed").append(eachCreated_time+"<br/>")

            }

            
            
        
        },error: (err) => {

            console.log(err.responseJSON.error.message);
            alert(err.responseJSON.error.message)

        }
       

    });// end ajax call 

}