/**
 * Created by Anand on 7/13/14.
 */

var data  = [

              {
                'name':'Anand',
                'email':'anand.anand434@gmail.com',
                'phno':8099146937,
                'city':'Hyderabad'
              },

                {
                    'name':'Ayan',
                    'email':'ayan.anand434@gmail.com',
                    'phno':8099147837,
                    'city':'Secderabad'
                },

                {
                    'name':'John',
                    'email':'john434@gmail.com',
                    'phno':8096746937,
                    'city':'Hyderabad'
                },

                {
                    'name':'Allen',
                    'email':'allen34@gmail.com',
                    'phno':8099146748,
                    'city':'Glasgow'
                },

                {
                    'name':'Andy',
                    'email':'andy434@gmail.com',
                    'phno':8899146937,
                    'city':'Melbourne'
                }

            ];

$(function(){
    var templat= _.template($('#templateContainer').html());

    var resultingTemplate=templat({dataObj:data});

    $('#targetContainer').html(resultingTemplate);

    render =function(){
        var templat2= _.template($('#templateContainer2').html());

        var resultingTemplate2=templat({dataObj:data});


    }
    $('#targetContainer').endlessScroll({
        fireOnce: false,
        insertAfter: "#targetContainer",
        data: function(  ) {


            return '<div class="clearfix" style="width: 300px;height: 200px;clear: both">Adding some div'+i+'</div>';
        }
    });


});
