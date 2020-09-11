(function($){
     console.log('Hello', $)
     $(document).ready(function(){
          const listData = function(){
               $.get('http://localhost:3000/bills/', function(result){
                    console.log(result)
                    $('#list_table tbody ').empty()
                    if(!result.length && !result.status){
                         return
                    }
                    result.data.forEach(function(bill){
                         let tmpl = '<tr>' +
                                   '   <td>'+ bill.title  +'</td>' +
                                   '   <td>'+ bill.price +'</td>' +
                                   '   <td> <button type="button" id="btn_delete" class="btn btn-danger btn-small" data-id=' + bill._id +'>Delete</td>' +
                                   '<tr>'
                         $('#list_table tbody ').append(tmpl)
                    })
               })
          }

          const createData = function(){
               let title = $('input[name="title"]').val()
               let price = $('input[name="price"]').val()

               if(!title || !price){
                    console.log('Invalid Body')
               }
               $.post('http://localhost:3000/bills/', {title: title, price: price}, function(result){
                    console.log(result)
                    $('input[name="title"]').val('')
                    $('input[name="price"]').val('')
                    listData()
               })
          }
          const removeData = function (){
               let id = ($(this).data('id'))
               let url =  'http://localhost:3000/bills/' + id
               $.ajax({
                    url: url ,
                    type: 'DELETE',
                    success: function(result){
                         listData()
                    }
               })
          }
          listData()
          $('#btn_create').on('click',createData)
          $('#list_table tbody').on('click', '#btn_delete', removeData)
     })
})(jQuery)