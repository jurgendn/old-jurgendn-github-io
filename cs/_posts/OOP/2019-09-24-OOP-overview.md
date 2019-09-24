---
layout: post
title: Bài 1 - Tổng quan về lập trình hướng đối tượng
categories: [cs]
description:    >
    Viết để ôn bài thôi
---
Có sai sót ở đâu các chiên gia góp ý nhé.  
Tính đến thời điểm này, cá nhân mình thấy OOP là thực sự cần thiết. Lấy ví dụ thế này, bạn được giao cho một bài về quản lí, tất nhiên có liên quan đến cơ sở dữ liệu. Giả sử là bạn đang cần quản lí sinh viên, với các thông số về tên, tuổi, lớp, điểm toán, điểm lí,.... Một cách tiếp cận rất rất truyền thống đó là ta khởi tạo tất cả các dữ liệu trên thông qua các mảng (array). Khi đó, dữ liệu của chúng ta có tổ chức như sau:  
<img src = "\assets\img\cs\OOP\Lecture_1\1.jpg" width = "500">  
Tất nhiên, cách này rất dễ, tuy nhiên về nó lại không thực sự tốt. Bởi lẽ tên, tuổi, điểm,...là một thuộc tính của học sinh, ta không nên để chúng ngang hàng với nhau, hơn nữa các dữ liệu cũng không có liên kết hay điều gì đó ràng buộc với nhau. Điều này yêu cầu ta cần có một sự tổ chức tốt hơn. Hãy nhìn mô hình sau đây và so sánh.  
<img src = "\assets\img\cs\OOP\Lecture_1\2.jpg" width = "500">  
Lúc này dễ dàng nhận thấy rằng chương trình của ta đã có cấu trúc chặt chẽ hơn là mô hình trên. Mỗi học sinh sẽ có một tập các thành viên bao gồm tên, ngày sinh và điểm. Trong điểm, ta lại có 2 thành viên nhỏ hơn là điểm Toán và điểm Lý, và như vậy việc truy xuất dữ liệu của sinh viên, đồng thời tương tác giữa các thành viên cũng tốt hơn rất nhiều.  
Mà khoan, như vậy tương đối giống với lập trình cấu trúc hồi ta học lập trình với ngôn ngữ ```C```. Trong bài sau mình sẽ phân biệt giữa struct và class sau.  
Trong mô hình trên, Student được gọi là một lớp (```class```), các đối tượng tên, điểm, DoB là các biến thành viên (```member variables```). Một class như vậy có thể được biểu diễn thông qua đoạn mã sau  
~~~Cs  
class Student  
{  
    string name;  
    string dob;  
    result mark;  
}  
Tại đây, ta phát sinh ra một câu chuyện khác về ```result mark;```, mình sẽ viết trong một vài bài tới về tính kế thừa (```inheritance```).  
Ta sẽ chạy thử một vài ví dụ nhỏ như sau:  
~~~Cs  
using System;  

class Student  
{  
    string name;  
    string dob;  

    static int Main()  
    {  
        Student stu = new Student();  
        stu.name = "Jurgen";  
        stu.dob = "09/03/1999";  
        return 0;  
    }  
}
