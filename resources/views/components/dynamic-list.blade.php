<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="csrf-token" content="{{csrf_token()}}">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dynamic List</title>
    <link rel="stylesheet" href="{{asset('css\bootstrap-4.3.1.css')}}">
    <link rel="stylesheet" href="{{asset('css\data-list\data-list-style.css')}}">
</head>

<body>
    <form action="{{route('put-list')}}" method="post">
        <div class="col-6 mx-auto">
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" name="name" id="name" class="form-control">
            </div>
            <div class="form-group">
                <label for="email">email</label>
                <input type="text" name="email" id="email" class="form-control">
            </div>
            <div class="form-group">
                <label for="phone">phone</label>
                <input type="text" name="password" id="phone" class="form-control">
            </div>
            <button type="button" class="btn btn-block btn-primary">Save List</button>
        </div>
    </form>
    <ul class="list-group" id="data-list">
        <li class="list-item"></li>
    </ul>
    <!-- &laquo; -->
    
</body>
<script src="{{asset('js/jquery-3.3.1.min.js')}}"></script>
<script src="{{asset('tools\data-list\data-list.js')}}"></script>
<script>
    // list plugin end
    var data_list = $("#data-list");
    var dataList = data_list.data_list({
        serverSide: true,
        url: '/list/ls',
        listPerPage: 1
    });
    $(document).on('click', ".btn", function(event) {
        let form_data = $(this).closest('form').serializeArray();
        event.preventDefault();
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
        $.ajax({
            dataType: 'json',
            url: '{{route("put-list")}}',
            method: 'post',
            data: form_data,
            success: function(data) {
                if (data == true) {
                    dataList.draw_list();
                } else {
                    alert('data not inserted');
                }
            }
        })
    })
    // 




    // console.log(dataList);
    // dataList.draw_list();
</script>

</html>