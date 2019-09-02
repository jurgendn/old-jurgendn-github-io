---
layout: post
title: Giải phương trình bằng phương pháp chia đôi
categories: [cs]
description:    >
    Mô tả viết cho có thôi, chứ mô tả chính là tiêu đề rồi
---
Thực ra thì phương pháp này dễ lắm, mình viết lại cho chắc cú thôi.  
Ba lăng nhăng về việc giải đúng một phương trình nào đó, thì giải đúng khó hơn giải gần đúng rất nhiều. Lớp phương trình đa thức có thể coi là lớp ít phức tạp nhất, tuy nhiên thực tế ta không thể giải một cách chính xác được phương trình bất kì có bậc lớn hơn 4, trong khi ta hoàn toàn có thể giải gần đúng được các phương trình này.  
Lí do thứ 2, máy tính sẽ không sử dụng các biểu thức số để tính toán, thay vào đó nó sẽ sử dụng giá trị gần đúng của biểu thức đó. Nói như vậy không có nghĩa giải đúng không tốt, tuy nhiên giải gần đúng đến sai số chấp nhận được đã là rất tốt.  Vì vậy trong khoa học tính toán (computational science), người ta chú trọng việc tính xấp xỉ hơn là giải đúng một phương trình bất kì.  
Bài này mình sẽ nói về phương pháp cưa đôi (bisection), là phương pháp đơn giản nhất.  
**Khoảng phân li nghiệm:**  
Một khoảng phân li nghiệm là khoảng mà trong đó chứa đúng một nghiệm của phương trình.  
Ta sẽ cần sử dụng đến tính chất sau của hàm số liên tục:  
*Nếu hàm số $$f(x)$$ liên tục trên $$(a, b)$$ và thỏa mãn $$f(a)f(b)<0$$, khi đó tồn tại nghiệm $$x_0$$ nằm giữa $$a$$ và $$b$$.  
Như vậy, nếu ta có thể tìm được khoảng $$(a, b)$$ đủ nhỏ thì khi đó ta có thể kết luận được nghiệm gần đúng của $$f(x)=0$$*. 
