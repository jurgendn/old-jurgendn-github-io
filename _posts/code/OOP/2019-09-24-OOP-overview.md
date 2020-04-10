---
layout: post
title: Bài 1 - Tổng quan về lập trình hướng đối tượng
categories: code
description:    >
    Viết để ôn bài thôi
img: '/assets/img/page/background.jpg'
---
Có sai sót ở đâu các chiên gia góp ý nhé. 

Tính đến thời điểm này, cá nhân mình thấy OOP là thực sự cần thiết. Lấy ví dụ thế này, bạn được giao cho một bài về quản lí, tất nhiên có liên quan đến cơ sở dữ liệu. Giả sử là bạn đang cần quản lí sinh viên, với các thông số về tên, tuổi, lớp, điểm toán, điểm lí,.... Một cách tiếp cận rất rất truyền thống đó là ta khởi tạo tất cả các dữ liệu trên thông qua các mảng (array). Khi đó, dữ liệu của chúng ta có tổ chức như sau:

<img src = "\assets\img\cs\OOP\Lecture_1\1.jpg" width = "500">

Tất nhiên, cách này rất dễ, tuy nhiên nó lại không thực sự tốt. Bởi lẽ tên, tuổi, điểm,...là một thuộc tính của học sinh, ta không nên để chúng ngang hàng với nhau, hơn nữa các dữ liệu cũng không có liên kết hay điều gì đó ràng buộc với nhau. Điều này yêu cầu ta cần có một sự tổ chức tốt hơn. Hãy nhìn mô hình sau đây và so sánh.

<img src = "\assets\img\cs\OOP\Lecture_1\2.jpg" width = "500">

Lúc này dễ dàng nhận thấy rằng chương trình của ta đã có cấu trúc chặt chẽ hơn là mô hình trên. Mỗi học sinh sẽ có một tập các thành viên bao gồm tên, ngày sinh và điểm. Trong điểm, ta lại có 2 thành viên nhỏ hơn là điểm Toán và điểm Lý, và như vậy việc truy xuất dữ liệu của sinh viên, đồng thời tương tác giữa các thành viên cũng tốt hơn rất nhiều.

Mà khoan, như vậy tương đối giống với lập trình cấu trúc hồi ta học lập trình với ngôn ngữ ```C```. Trong bài sau mình sẽ phân biệt giữa struct và class sau.

Trong mô hình trên, Student được gọi là một lớp (```class```), các đối tượng tên, điểm, DoB là các biến thành viên (```member variables```). Một class như vậy có thể được biểu diễn thông qua đoạn mã sau

~~~c#
class Student
{
    string name;  
    string dob;  
    result mark;  
}
~~~

Tại đây, ta phát sinh ra một câu chuyện khác về ```result mark;```, mình sẽ viết trong một vài bài tới về tính kế thừa (```inheritance```).

Ta sẽ chạy thử một vài ví dụ nhỏ như sau:

~~~c#
using System;  
class Student  
{  
    string name;  
    string dob;  

    static int Main()  
    {  
        Student stu = new Student();  
        stu.name = "Jurgen";  
        stu.dob = "01/01/1999";  
        return 0;  
    }  
}
~~~

Mình sẽ giải thích từng dòng code một như sau.

### Khai báo một class

Một class được khai báo với từ khóa ```class```. Cú pháp chung sẽ là

~~~c#
class [class_name]
{
    //Statement
}
~~~

### Khai báo các members và methods trong class

Ta sẽ lấy luôn ví dụ là vấn đề ban nãy, câu chuyện về học sinh và các thuộc tính.

~~~c#
class Student
{
    string name;
    // Ta dùng string bởi tên sẽ là một xâu

    string dob;
    //Ngày sinh ta cũng sẽ để là một xâu cho dễ xử lí.
    //Tất nhiên sau này khi đến phần kế thừa, ta hoàn toàn có thể định nghĩa một class về ngày tháng

    //Khởi tạo entry point cho chương trình
    static int Main()
    {
        //Tạo mới một đối tượng thuộc class Student
        Student stu = new Student();
        //Gán giá trị cho các member
        stu.name = "Jurgen";
        stu.dob = "01/01/1999";
        return 0;
    }
}
~~~

Như vậy, về cơ bản ta đã thiết kế xong một class đơn giản.

Dễ hiểu đúng không.

Trong bài sau mình sẽ viết về các thuộc tính (```properties```) của class, attribute và các phương thức.

Các bạn xem tại [đây](foo)