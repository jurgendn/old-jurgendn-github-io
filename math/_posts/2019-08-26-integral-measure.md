---
layout: post
categories: [math]
description:    >
    Lí thuyết độ đo và tích phân từ bài toán diện tích
---
# Từ diện tích cho đến lý thuyết độ đo và tích phân

## Diện tích
Về cơ bản, việc tính diện tích của một hình là một vấn đề hết sức thực tiễn trong đời sống hàng ngày, tuy thế, việc tính toán được một cách chính xác diện tích của một hình có hình dạng bất kì là không dễ. Một vài người đề xuất việc ước lượng như sau:

    - Thực hiện vẽ một lưới chữ nhật (thường là lưới ô vuông) đè lên hình đó. 
    (Các mắt lưới nên bằng nhau)
    - Đếm số hình chữ nhật con nằm trong hoặc nằm trên hình cần đo.
    - Phần còn lại mời các vozer thể hiện

<img src = "/assets/img/math/grid_on_area.png" width = "500">

Như vậy, bằng một sáng kiến đơn giản mà người ta đã có thể ước lượng được diện tích của một hình bất kì.  
Dù đã ước lượng được một cách tương đối, tuy nhiên việc ước lượng diện tích theo cách này không hẳn đã đủ độ chính xác cần thiết. Trong thực tế chúng ta cần tính toán chính xác hơn rất nhiều. Một cách tự nhiên, ta có thể nghĩ đến việc vẽ một lưới chữ nhật nhỏ hơn. Khi đó sự khác biệt giữa 2 ước lượng trở thành:
<img src ="/assets/img/math/tight_grid.png" width = "800">
Rõ ràng bằng cách này ta có thể tính toán chính xác hơn rất nhiều. Một cách tự nhiên, ta có thể suy được độ chính xác sẽ càng cao nếu ta dùng các ```lưới chữ nhật``` càng nhỏ. Tuy nhiên, câu chuyện tính diện tích này cũng dẫn đến một vấn đề hay ho khác, mời các vị huynh đài đọc tiếp.  
___
## Lý thuyết độ đo
Với những trường hợp như dưới đây, khá là khó khăn khi quyết định xem ```hình chữ nhật``` không nằm hoàn toàn bên trong hình có được tính hay không
<img src = "/assets/img/math/measure_1.png" width = "300">  
**Liệu ta nên chỉ lấy những phần nằm trong hoặc chỉ lấy những phần bao ngoài vật thể?**  
**Hay lấy một phần, nửa nằm trong nửa nằm ngoài?**
Hãy xét một lưới như sau:
<img src = "/assets/img/math/measure_2.png" width = "800">  
Rõ ràng phần bao ngoài và nằm trong hình có sự sai khác về diện tích rất lớn. Ta sử dụng lại ý tưởng của phần trước, tức là sử dụng một ```lưới chữ nhật``` nhỏ hơn, dễ thấy rằng sai khác giữa việc lấy phần bao ngoài và phần nằm trong đã giảm đi một lượng đáng kể. 
<img src  ="/assets/img/math/measure_3.png" width = "800">  
Vậy, nếu ta sử dụng một ```lưới chữ nhật``` với các mắt lưới đủ nhỏ, có khi nào phần ngoài và phần trong sẽ gần nhau tùy ý không?  
Rõ ràng, đến một lúc nào đó, khi diện tích phần nằm ngoài và phần bằng trong coi như bằng nhau được, lúc đó ta có thể kết luận được chính xác diện tích của vật thế.  
Đây là câu chuyện khởi đầu cho ```độ đo Jordan - Peano```  
Trong bài này tớ sẽ không bốc phét sâu về độ đo này, hẹn các bạn hiền ở những bài viết sau, vì phần này mình cũng chưa được thông lắm. Mình sẽ đá sang tích phân một chút.

## Tích phân
Khi đã có được độ đo trong bằng độ đo ngoài, lúc này ta có thể kết luận được rằng vật thể có diện tích xác định. Việc cần làm là tính tổng diện tích các hình chữ nhật nằm phía bên trong của vật đó.  
Đặt hình đó vào trong một hệ trục tọa độ $$Oxy$$
<img src = "/assets/img/math/Integral_1.png" width = "500">  
Diện tích của hình sẽ bằng diện tích của phần màu trằng. Như vậy, vấn đề của chúng ta sẽ được đưa về một vấn đề đơn giản hơn, đó là tính diện tích của các hình có dạng như sau  
<img src = "/assets/img/math/integral_2.png" width = "500">   
Giả sử rằng đường cong có phương trình $$f(x)$$ xác định trên một đoạn $$[a, b]$$ nào đó:
<img src = "/assets/img/math/integral_3.png" width = "500">  
Trên đoạn $$[a, b]$$ này, lấy $$n$$ điểm chia, khoảng cách giữa 2 điểm chia $$x_{i-1}$$ và $$x_{i}$$ là $$\Delta x_{i}$$. Lúc này, mỗi một hình chữ nhật đều có một cạnh là $$\Delta x_{i}$$ và cạnh còn lại là $$f(x_i)$$  
<img src = "/assets/img/math/integral_4.png" width = "500">  
Khi đó, diện tích của hình chữ nhật xấp xỉ bằng  
$$\begin{aligned}
    S_n = \sum_{i=1}^{n} f(x_i)\Delta x_{i}
\end{aligned}$$  
Từ đây, thấy rằng nếu chia các hình này ngày càng nhỏ, đồng nghĩa với việc $$n \to \infty$$. Khi đó, ta có diện tích $$S$$ của hình cần tính là  
$$\begin{aligned}
    S = \underset{n \to \infty}{lim}S_n = \underset{n \to \infty}{lim}{\sum_{i=1}^{n} f(x_i)\Delta x_{i}}
\end{aligned}$$  
Dĩ nhiên, các khoảng chia $$\Delta x_i \to 0$$ khi $$n \to \infty$$, bởi khi đó thì ta mới có thể tính được diện tích của hình trên. Năm 1675, $$Leibniz$$ đưa ra kí hiệu $$\int$$, gọi là tích phân (integral) thay cho tổng trên.  
$$\begin{aligned}
    \int_{a}^{b}f(x)dx = \underset{n \to \infty}{lim}{\sum_{i=1}^{n} f(x_i)\Delta x_{i}}
\end{aligned}$$  
Như vậy là ta đã có một công cụ để tính diện tích rất mạnh, có thể tính được hầu hết tất cả các loại hình, tất cả chỉ xuất phát từ công thức cực kì đơn giản: diện tích của hình chữ nhật có 2 cạnh là $$a, b$$  
$$\begin{aligned}
    S = a.b
\end{aligned}$$  
Một câu hỏi mới lại đặt ra. Nếu như tất cả các hình đều có thể tính được qua các hình chữ nhật, thế thì người ta tính diện tích hình chữ nhật bằng cách nào?  
Bài sau mình sẽ viết về diện tích của [```hình chữ nhật```](\math\2019-08-25-hcn\)