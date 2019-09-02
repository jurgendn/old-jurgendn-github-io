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
*Nếu hàm số $$f(x)$$ liên tục trên $$(a, b)$$ và thỏa mãn $$f(a)f(b)<0$$, khi đó tồn tại nghiệm $$x_0$$ nằm giữa $$a$$ và $$b$$.*    
Như vậy, nếu ta có thể tìm được khoảng $$(a, b)$$ đủ nhỏ thì khi đó ta có thể kết luận được nghiệm gần đúng của $$f(x)=0$$.  
Dễ thấy rằng một giá trị $$x \in (a, b)$$ thì chỉ có thể xảy ra một trong các trường hợp sau:  
$$\begin{aligned}
\left[
\begin{matrix}
x = \frac{a+b}{2}\\ 
x \in \left(a, \frac{a+b}{2}\right)\\ 
x \in \left(\frac{a+b}{2}, b\right)
\end{matrix}
\right.
\end{aligned}$$  
Từ đây, ta có thể thấy rằng, nghiệm $$x$$ nếu không đúng bằng $$\frac{a+b}{2}$$ thì sẽ thuộc vào một trong 2 khoảng còn lại, mà mỗi khoảng này lại có độ dài bằng một nửa khoảng trước đó. Vậy ta có thể thu hẹp khoảng nghiệm này lại bằng cách xét 2 dãy số $$\{x_n\}, \{y_n\}$$ như sau:  
$$\begin{aligned}
\left\{\begin{matrix}
    x_0 = a, y_0 = b\\ 
    \left[\begin{matrix}
    x_{n+1} = \frac{x_n+y_n}{2}, y_{n+1} = y_n \text{    , nếu    }  x \in \left(\frac{x_n+y_n}{2}, y_n\right)\\ 
    y_{n+1} = \frac{x_n+y_n}{2}, x_{n+1} = x_n \text{    , nếu    }  x \in \left(x_n, \frac{x_n+y_n}{2}\right)
    \end{matrix}\right.
\end{matrix}\right.
\end{aligned}$$  
và dừng lại ngay khi $$x = \frac{x_n+y_n}{2}$$ tại một giá trị nào đó (nghiệm đúng).  
Nếu ta đặt độ dài đoạn $$(a, b)$$ là $$\delta$$ thì ta có 2 điều sau 
$$\begin{aligned}
\left\{\begin{matrix}
x_n<x<y_n\\ 
y_{n+1} - x_{n+1} = \frac{\delta}{2^{n+1}},\forall n\in \Bbb{N}
\end{matrix}\right.
\end{aligned}$$  
Từ đây dễ thấy dãy $$\{x_n\}, \{y_n\}$$ ngày càng gần tới nghiệm hơn, và như vậy một lúc nào đó ta sẽ thu được nghiệm gần đúng của phương trình.  
Đoạn mã minh họa cho thuật toán với sai số $$\epsilon = 10^-6$$:  
~~~Python
def solveEquation(f, a, b, epsi=1e-6):
    root = (a+b)/2
    while b-a > epsi:
        if f(root) == 0:
            return root
        elif f(a)*f(root) > 0:
            a = root
            root = b
        elif f(a)*f(root) < 0:
            b = root
        root = (a+b)/2
    return root  
~~~
