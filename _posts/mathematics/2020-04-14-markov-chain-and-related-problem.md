---
layout: post
title: Markov Chain - Part 2
categories: mathematics
---

Hê hê, bài trước ta đã đề cập đến những khái niệm tương đối cơ bản của xích Markov. Trong bài này, tasẽ sử dụng một vài vấn đề thực tế để khai thác các khía cạnh của xích Markov một cách trực quan hơn

{:toc}

## Bài toán

Để tiện cho việc triển khai, ta sẽ giả sử mình là quản trị viên của 1 trang web nào đó, giả sử là `jurgendn.pw` là trạng hiện tại của tôi.

Theo như tìm hiểu, ta nhận thấy rằng trang web được liên kết đến một số hữu hạn các trang web nhất định. Là một quản trị viên, ta phải khai thác được càng nhiều thông tin càng tốt, điều này rất có lợi cho việc lôi kéo người sử dụng.

Để tiện theo dõi, ta sẽ đặt tại đây các trang web có liên quan đến nhau và tacó tham gia vào quan hệ của các trang web đó

| STT  | Website               |
| ---- | --------------------- |
| 1    | jurgendn.pw           |
| 2    | mamofood.com          |
| 3    | bibocorp.com          |
| 4    | hacmao.pw             |
| 5    | amateur3673.github.io |

 Theo bên cạnh đó qua theo dõi bằng các công cụ chuyên biệt, ta có được số liệu truy cập trang web của một số người sử dụng trong một khoảng thời gian nhất định như sau

- 545225214352445223422351125415
- 212411531553255241434123353512
- 154512514242513131115452312453
- 524345152331455524551435241353
- 545514132535342215314114132222
- 533433433514152452125223225355
- 122132152512142145233115352335
- 133222111323254253244312441142
- 343541523352355255512235322521
- 244542123532151424313441222523

>  Lưu ý rằng các số được dùng thay cho các trang web theo thứ tự như trên bảng.

Ta sẽ bắt đầu nghiên cứu từ lúc thu thập dữ liệu.

Đầu tiên, ta có tập các website `I = {1,2,3,4,5}`.

Phân phối ban đầu $$\lambda$$ là tỉ lệ người dùng của mỗi website tại thời điểm bắt đầu

- Tại thời điểm đầu tiên $$t=0$$, ta thấy

  | 1    | 2    | 3    | 4    | 5    |
  | ---- | ---- | ---- | ---- | ---- |
  | 3    | 2    | 1    | 0    | 4    |

  Điều này có nghĩa tại thời điểm đầu tiên, lượng người truy cập của các website đang là $$\lambda_0 = \{0.3,0.2,0.1,0,0.4\}$$. Hehe trang của mình cũng có tận $$30\%$$ lượng người đang truy cập.

- Tiếp theo, ta sẽ lấy tiếp dữ liệu về chuyển trang. Tại đây, cũng phải giả thiết rằng quyết định chuyển trang web của một người không bị ảnh hưởng bởi website trước đó. 

  Chương trình minh họa:

  ```python
  # Initial
  user_trace = ['545225214352445223422351125415','212411531553255241434123353512',
                '154512514242513131115452312453','524345152331455524551435241353',
                '545514132535342215314114132222','533433433514152452125223225355',
                '122132152512142145233115352335','133222111323254253244312441142',
                '343541523352355255512235322521','244542123532151424313441222523']
  
  # State space
  I = ['1','2','3','4','5']
  
  # Calculation
  transition_time = []
  transition_list = []
  for i in I:
      for j in I:
          transition_time.append(0)
          transition_list.append(i+j)
          for k in user_trace:
              if k.count(i+j):
                  transition_time[len(transition_time) - 1]+=1
  
  transition_frequent = []
  for (u, v) in zip(transition_list, transition_time):
      transition_frequent.append({u: v})
  transition_frequent
  
  >>> [{'11': 6}, {'12': 8}, {'13': 6}, {'14': 9}, {'15': 9}, {'21': 8}, {'22': 7}, {'23': 9}, {'24': 7},
       {'25': 9}, {'31': 7}, {'32': 7}, {'33': 6}, {'34': 7}, {'35': 8}, {'41': 8}, {'42': 6}, {'43': 7},
       {'44': 3}, {'45': 7}, {'51': 9}, {'52': 8}, {'53': 9}, {'54': 6}, {'55': 5}]
  ```

  Ta có được bảng số liệu như sau

  |      | 1    | 2    | 3    | 4    | 5    |
  | ---- | ---- | ---- | ---- | ---- | ---- |
  | 1    | 6    | 8    | 6    | 9    | 9    |
  | 2    | 8    | 7    | 9    | 7    | 9    |
  | 3    | 7    | 7    | 6    | 7    | 8    |
  | 4    | 8    | 6    | 7    | 3    | 7    |
  | 5    | 9    | 8    | 9    | 6    | 5    |

  Bảng trên được xác định như sau:

  - Vị trí $$(i,j)$$ trong bảng trên ứng với hàng $$i$$ cột $$j$$ là số lần người dùng truy cập trang $$j$$ từ trang $$i$$.

  Từ đây, ta tính được xác suất chuyển sang các trang từ một trang cho trước, được cho bởi bảng sau

  |      | 1    | 2    | 3    | 4    | 5    |
  | ---- | ---- | ---- | ---- | ---- | ---- |
  | 1    | 3/19 | 4/19 | 3/19 | 9/38 | 9/38 |
  | 2    | 1/5  | 7/40 | 9/40 | 7/40 | 9/40 |
  | 3    | 1/5  | 1/5  | 6/35 | 1/2  | 8/35 |
  | 4    | 8/31 | 6/31 | 7/31 | 3/31 | 7/31 |
  | 5    | 9/37 | 8/37 | 9/37 | 6/37 | 5/37 |

Okay, như vậy đến đây ta đã thu được các số liệu ban đầu.

Tại đây, ta cũng nhận thấy rằng nếu gọi trạng thái của người sử dụng tại thời điểm $$t  =n$$ là $$X_n$$ thì $$(X_n)_{n \ge 0}$$ là một xích Markov, trong đó không gian trạng thái $$I$$, phân phối ban đầu $$\lambda_0$$ và ma trận xác suất chuyển $$P$$ được cho bởi bảng trên.

Ta sẽ minh họa bằng đồ thị để trực quan hơn

<img src="/post_image/mathematics/2020-04-14-markov-chain-and-related-problem.assets/Graph-1586888109540.svg" alt="Graph" style="zoom:67%;" />

Nhìn thì khá là phức tạp, tuy nhiên ta sẽ chưa dùng đế đồ thị này ngay. Hãy đến với một số vấn đề trước.

## Các vấn đề

### Phân phối dừng - Steady State

Như đã đề cập ở bài viết trước, ta có thể xác định phân phối lượng người truy cập ở một thời điểm $$n$$ bất kì nào đó, kí hiệu $$\lambda_n$$ được xác định bởi $$\lambda_n = \lambda_0P^n$$.

Ta sẽ xác định $$\lambda_n$$ tại một số thời điểm để theo dõi biến động của lượng người truy cập. Ta có 

-  $$\lambda_1  = [0.2046, 0.2047, 0.2067, 0.1909, 0.193]$$ 

-  $$\lambda_2 = [0.2106, 0.1989, 0.2037, 0.1754, 0.211] $$

-  $$\lambda_3 = [0.2101, 0.1998, 0.2041, 0.1769, 0.2096] $$

  ...

Dưới đây là đồ thị biểu diễn phân phối người dùng của từng website qua 10 bước

<img src="/post_image/mathematics/2020-04-14-markov-chain-and-related-problem.assets/state_vector.svg" alt="state_vector" style="zoom:67%;" />

Yo, không khó để nhận ra rằng từ bước thứ 4 trở đi, lượng người truy cập gần như là không thay đổi nữa. Lúc này, các giá trị $$\lambda_n$$ tuy không bằng nhau nhưng chúng rất gần nhau.
Ta đặt ra câu hỏi:

> $$\lambda$$ thỏa mãn điều kiện gì để phân phối là không đổi theo thời gian?

Tại thời điểm $$t = n$$, ta có

$$
\begin{cases}
\lambda_n = \lambda_0P^n \\
\lambda_{n+1} = \lambda_0P^{n+1} = \lambda_nP
\end{cases}
$$


Do phân phối là không đổi, do đó ta có $$\lambda_{n+1} = \lambda_n = \lambda$$

Từ đây, ta có

$$
\lambda P = \lambda
$$
Như vậy, phân phối dừng của một xích Markov $$(X_n)$$ được xác định như bởi hệ

$$
\begin{cases}
\lambda P = \lambda \\
\sum_{i \in I}\lambda_i = 1
\end{cases}
$$

Ví dụ với vấn đề nêu trên, phân phối dừng là $$\lambda = [0.2104543 , 0.19948658, 0.20391821, 0.17660766, 0.20953325]$$. Tức là sau một khoảng thời gian đủ dài, lượng người sử dụng mỗi website sẽ có phân bố như trên.

Mọi việc có vẻ khá dễ dàng cho website của tôi. Tuy nhiên, giả như có một ngày nào đó, có một ông lớn tham gia vào mạng này. Bằng tiềm lực kinh tế mạnh mẽ, công ty này thuê rất nhiều content creators, giữ chân người dùng khủng khiếp đến mức người dùng không chuyển từ trang này sang trang khác nữa.

Lúc đó, chúng ta còn lại bao nhiêu người dùng?

Ma trận xác suất chuyển lúc này chuyển lại thành



|      | 1    | 2    | 3    | 4    | 5    | 6    |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 1    | 2/19 | 4/19 | 3/19 | 9/38 | 9/38 | 1/19 |
| 2    | 1/5  | 7/40 | 9/40 | 7/40 | 7/40 | 2/40 |
| 3    | 1/5  | 1/5  | 6/35 | 1/2  | 6/35 | 2/35 |
| 4    | 8/31 | 6/31 | 7/31 | 3/31 | 5/31 | 2/31 |
| 5    | 9/37 | 8/37 | 7/37 | 6/37 | 5/37 | 2/37 |
| 6    | 0    | 0    | 0    | 0    | 0    | 1    |

Một số ít người dùng chuyển qua trang số $$6$$ này.

Đồ thị phân phối được biểu diễn như sau

<img src="/post_image/mathematics/2020-04-14-markov-chain-and-related-problem.assets/state_vector-1586893325658.svg" alt="state_vector" style="zoom:67%;" />

Với sự tham gia của công ty mới này, chúng ta đứng trước nguy cơ mất sạch thị phần. Thực tế thì đúng là như vậy, nếu không có chiến lược gì cứu vãn, phân phối dừng sẽ như này


$$
\lambda = [0,0,0,0,0,1]
$$

### Phân loại trạng thái

Tại thời điểm lúc chỉ có 5 website tham gia, ta thấy rằng mỗi website đều có thể được visit. Tuy nhiên, khi website số $$6$$ tham gia, không một người dùng nào có thể thoát ra khỏi website này.

Trong xích Markov, một trạng thái $$i$$ nào đó được gọi là trạng thái hút nếu $$P_{ii} = 1$$, nghĩa là tại bước tiếp theo, xích sẽ tiếp tục ở trạng thái $$i$$.

#### Absoring state

> Trạng thái $$i$$ được gọi là trạng thái hút nếu $$P_{ii}  = 1$$ và $$P_{ij} = 0, \forall i \ne j$$ 

#### Recurrent - Transient

Bên cạnh trạng thái hút, ta cũng quan tâm đến việc xích có thể trở lại một trạng thái nào đó trong tương lai hay không.

Một người đang ở `jurgendn.pw` có thể trở lại trang này trong tương lai không, hay người đó chỉ ở lại trang này một lần duy nhất. Dựa vào điều trên, ta có thể chia không gian trạng thái thành 2 phần:

- Tập các trạng thái mà xích có thể trở lại trong tương lai.

  Ta gọi các trạng thái này là các trạng thái `hồi quy` (***recurrent***)

- Tập các trạng thái mà xích chỉ có thể đến hữu hạn lần và có thể không trở lại trong tương lai

  Ta gọi các trạng thái này là các trạng thái `chuyển` (***transient***)

Kí hiệu $$f_i$$ là xác suất xích xuất phát từ trạng thái $$i$$ và trở lại trạng thái $$i$$.

Ta có:

$$
f_i = P(X_n = i \text{ với } n \text{ nào đó}|X_0 = i)
$$

Hiển nhiên nếu $$i$$ là recurrent thì $$f_i = 1$$ 

Mặt khác, nếu $$i$$ là transient, khi đó mỗi một lần xích chạm tới trạng thái $$i$$ luôn luôn tồn tại một xác suất mà từ đó xích không trở lại trạng thái $$i$$ nữa và xác suất này bằng $$1-f_i$$. Do đó, xuất phát từ trạng thái $$i$$, xác suất để xích ở trạng thái $$i$$ đúng $$n$$ lần là $$\displaystyle f_i^{n-1} (1-f_i)$$. 

Từ đó, ta được nhận xét

> Trạng thái $$i$$ là recurrent khi và chỉ khi bắt đầu xuất phát từ trạng thái $$i$$, trung bình xích trở về trạng thái $$i$$ là vô hạn lần

Đặt

$$
I_n = \begin{cases}
1, \text{ if } X_n = i \\
0, \text{ if } X_n \ne I
\end{cases}
$$

Khi đó $$\sum_{i = 0}^{\infty}I_n$$ thể hiện số lần xích ở trạng thái $$i$$. Ta có:

$$
\begin{aligned}
E\left[\sum_{n = 0}^{\infty}I_n|X_0 = i\right] & = \sum_{n = 0}^{\infty}E\left[I_n|X_0 = i\right] \\
& =  \sum_{n = 0}^{\infty}P\left[X_n = i|X_0 = i\right] \\
& = \sum_{n = 0}^{\infty}P_{ii}^n
\end{aligned}
$$

Từ điều trên, ta được hệ quả trực tiếp

***Hệ quả 1:*** Trạng thái $$i$$ là

- Recurrent nếu $$\sum_{n = 0}^{\infty}P_{ii}^n = \infty$$
- Transient nếu $$\sum_{n = 0}^{\infty}P_{ii}^n > \infty$$

Ta có một số kết quả quan trọng có thể được chứng minh như sau, tất nhiên ta chỉ xét trong trường hợp xích có hữu hạn trạng thái

**Định lí 1:**

> Trong một lớp liên thông, các trạng thái hoặc cùng là transient, hoặc cùng là recurrent

*Chứng minh*

Xét $$C$$ là một lớp liên thông.

Nếu $$C$$ có 1 phần tử, hiển nhiên đúng

Nếu $$C$$ có ít nhất 2 phần tử, xét 2 trạng thái $$i, j \in C$$. Do $$i \leftrightarrow j$$ nên tồn tại 2 số nguyên $$m, n \ge 0$$ sao cho $$P_{ij}^{(n)} > 0$$ và $$P_{ji}^{(m)} > 0$$. 

- Nếu $$i$$ là transient. Dễ thấy tồn tại $m, n$ sao cho $p_{ij}^{(n)} > 0$ và $p_{ji}^{(m)}>0$.Ta có 
- 
  $$
  p_{ii}^{(n+r+m)} \ge p_{ij}^{(n)}p_{jj}^{(r)}p_{ji}^{(m)}
  $$
  
  Do đó ta có
  
  $$
  \sum_{r=1}^{\infty}p_{jj}^{(r)} \ge \frac{1}{p_{ij}^{(n)}p_{ji}^{(m)}}\sum_{r = 1}^{\infty}p_{ii}^{(r)} < \infty
  $$
  
  Điều này chứng tỏ $$j$$ là transient.

- Nếu $$i$$ là recurrent, ta có:

$$
p_{jj}^{(n+r+m)} \ge p_{ji}^{(m)}p_{ii}^{(r)}p_{ij}^{(n)}
$$

Do $$i$$ là recurrent nên $$j$$ cũng là recurrent.

Ta có điều cần chứng minh.

**Định lí 2:**

> Mọi lớp liên thông đóng hữu hạn trạng thái thì các trạng thái của lớp đó là recurrent

*Chứng minh*

Phản chứng, giả sử tồn tại một trạng thái không là recurrent, Khi đó, theo `định lí 1` ta được tất cả các trạng thái đều là transient.

Khi đó do lớp là transient nên tồn tại thời điểm $$n$$ và trạng thái $$k \notin C$$ nào đó để:

$$
P(X_n = k|X_0 = i) > 0
$$

Do $$C$$ là lớp đóng nên phải có $$k \in C$$, điều này là vô lí.

Điều này dẫn đến giả thiết phản chứng sai, suy ra điều cần chứng minh

**Định lí 3:**

> Mọi lớp liên thông hữu hạn trạng thái và recurrent thì đóng.

*Chứng minh*

Phản chứng, giả sử lớp $$C$$ không đóng. 

Khi đó tồn tại một trạng thái $$k$$ nào đó sao cho $$i \to k$$ và $$k \notin C$$.

Xét tại thời điểm $$X_0$$ xích xuất phát tại trạng thái $$i$$. Do $$C$$ không đóng nên tồn tại một xác suất $$p$$ để xích ở trạng thái $$k$$ sau một số lượng bước nào đó. Từ thời điểm này, xích không trở lại các trạng thái trong $$C$$ nữa.

Vô lí do xích là recurrent.

Ta có điều cần chứng minh.

Từ đây, ta có thể nhận biết được một xích Markov có là recurrent hoặc các trạng thái nào của xích Markov là recurrent.

Nếu nhìn nhận xích Markov dưới dạng một đồ thị, ta có thể có những kết quả khá thú vị như sau:
**Gọi $$G$$ là đồ thị biểu diễn xích Markov $$(X_n)_n$$ với không gian trạng thái $$I$$ và ma trận xác suất chuyển $$P$$**.

Khi đó

**Định lí 4:**

> Một thành phần liên thông đóng là tập các trạng thái recurrent

Điều này tương đương với một lớp liên thông đóng hữu hạn trạng thái thì recurrent

**Định lí 5**

> Cho `C` là một `communicating class` gồm các trạng thái $$v_1, v_2,...,v_n$$  Tập các đỉnh kề trong biểu diễn biểu diễn đồ thị chuyển trạng thái của các đỉnh $$v_1, v_2,..,v_n$$ lần lượt là $$E_1, E_2, ...,E_n$$.  Khi đó `C` là lớp đóng khi và chỉ khi $$C = \cup_{i=1}^{n}E_i$$

*Chứng minh*

`C` đóng $$\Rightarrow$$  $$C = \cup_{i=1}^{n}E_i$$.

Phản chứng, giả sử $$C \neq \cup_{i=1}^{n}E_i$$. Dễ thấy rằng $$C \subset \cup_{i=1}^{n}E_i$$. Do đó thấy rằng tồn tại một phần tử $$t$$ nào đó sao cho $$t \in \cup_{i=1}^{n}E_i$$ và $$t \notin C$$.

Chứng tỏ tồn tại một tập $$E_i$$ nào đó chứa $$t$$, dẫn đến đỉnh $$v_i$$ kề với $$i$$. Do $$v_i \in C$$ và $$C$$ đóng nên $$t \in C$$, vô lí. 

$$\displaystyle C = \cup_{i=1}^{n}\{E_i\} \Rightarrow$$ `C` đóng.

Giả sử $$C$$ không phải là lớp đóng. Khi đó tồn tại một đỉnh $$t$$ nào đó kề với một đỉnh $$v_i \in C$$ và $$t \notin C$$. Điều này vô lí với giả thiết ban đầu.

Vậy ra có điều cần chứng minh

Từ đó ta có một hướng tiếp cận xích Markov trong lập trình.

Vấn đề này ta sẽ bàn đến trong bài sau

### Xác suất chạm - Thời điểm chạm

#### Xác suất chạm (hitting time)

Bên cạnh việc phân lớp các trạng thái, ta cũng quan tâm đến việc xác suất xích đạt đến 1 trạng thái nào đó khi xuất phát ở một trạng thái bất kì. Điều này có ý nghĩa quan trọng trong thực tế. Ví dụ, xác suất một người truy cập trang `jurgendn.pw` khi xuất phát từ trang `hacmao.pw` là bao nhiêu, hay xác suất một người đánh bạc có 10000 với 1000 xuất phát.

Ta chỉ xét các xích Markov tối giản.

Xét xích Markov $$(X_n)_n$$ có không gian trạng thái $$I$$ và ma trận xác suất chuyển $$P$$.

Cho tập $$A$$ là tập các trạng thái $$A = \{a_1, a_2,...,a_k\}$$

Giả sử xích xuất phát từ trạng thái $$i$$. Ta cần tích xác suất để xích đến một trạng thái thuộc tập $$A$$.

Gọi $$h_i$$ là xác suất để xuất phát từ trạng thái $$i$$ xích đến được tập $$A$$.

- Nếu $$i \in A$$ thì hiển nhiên rằng $$h_i = 1$$.
- Nếu $$i \notin A$$, khi đó hiển nhiên rằng có $$h_i$$ khả năng xích chạm đến $$A$$ từ $$i$$, bên cạnh đó cũng có $$p_{ij}$$ khả năng xích ở trạng thái $$j$$, rồi từ đó có $$h_j$$ khả năng xích đến tập $$A$$ từ $$j$$.

Như vậy, ta cần giải hệ phương trình sau để tìm ra các $$h_i$$.

$$
\begin{cases}
h_i = 1, \text{ if } i \in A \\
h_i = \sum_{i \in I\setminus A}p_{ij}h_j
\end{cases}
$$

Cần phải nhớ rằng hệ trên không phải lúc nào cũng có nghiệm duy nhất, do đó các nghiệm của bài toán phải là các nghiệm không âm tối tiểu của hệ.

Chắc nhiều bạn cũng xem siêu nhân rồi, nên là lấy luôn ví dụ như này cho gần gũi.

> Quá trình chiến đấu chống lại Oroku giải cứu thế giới là một xích Markov với không gian trạng thái gồm 4 trạng thái chính:
>
> - Biến hình
> - Triệu hồi siêu thú
> - Sử dụng sức mạnh tinh thần và tình bạn bằng những câu nói đầy xúc động
> - Chiến thắng và tiêu diệt thành công Oroku
>
> Quá trình chuyển đổi giữa các giai đoạn được mô tả bằng đồ thị bên dưới.
>
> Hãy tính xác suất siêu nhân phải sử dụng sức mạnh tinh thần và tình bạn từ trạng thái biến hình

![Graph](/post_image/mathematics/2020-04-14-markov-chain-and-related-problem.assets/Graph-1588320848011.png)

Đồ thị mô tả như trên

Để cho tiện, ta thực hiện gắn nhãn cho mỗi hoạt động 

| Action                           | Label |
| -------------------------------- | ----- |
| Biến hình                        | 0     |
| Siêu thú                         | 1     |
| Sức mạnh tinh thần và tình bạn   | 2     |
| Đánh bại Oroku giải cứu thế giới | 3     |

Đầu tiên, ta có $$A = \{2\}$$

Gọi $$h_i$$ là xác suất các chiến binh công lí chuyển từ trạng thái $$i \in I$$ sang `(2)`.

Thấy rằng nếu các chiến binh đã ở $$2$$ rồi thì $$h_2 = 1$$

- Khi các chiến binh đang ở `0`:
  - 40% họ sẽ tiếp tục chiến đấu trong trạng thái này và $$h_0$$ khả năng sử dụng sức mạnh tinh thần và tình bạn
  - 50% họ triệu hồi siêu thú khổng lồ và $$h_1$$ khả năng sử dụng sức mạnh tinh thần và tình bạn
  - 10% chuyển ngay sang trạng thái sức mạnh và $$h_2$$ khả năng chuyển sang trạng thái này.
- Tương tự với các trạng thái khác

Khi con chuột đang ở $$1$$, nó có $$70\%$$ khả năng chuyển sang $$0$$, $$30\%$$ chuyển sang $$A$$.

Từ đó ta có hệ phương trình sau:

$$
\begin{cases}
h_0 = 0.4h_0 + 0.5h_1 + 0.1h_2 \\
h_1 = 0.6h_1 + 0.1h_2 + 0.3h_3 \\
h_2 = 1\\
h_3 = h_3
\end{cases}
$$

Thực hiện giải hệ phương trình ta thu được: 

$$
\begin{cases}
h_0 = \frac{9}{24} + \frac{15}{24}h_3 \\
h_1 = \frac{1}{4} + \frac{3}{4}h_3 \\
h_2 = 1\\
h_3 = h_3
\end{cases}
$$

Hệ đến đây vẫn chưa giải được. Tuy nhiên do tính tối tiểu của nghiệm, ta chọn $$h_3 = 0$$ (thực tế đã thắng rồi thì còn kích hoạt sức mạnh làm gì nữa).

Từ đó ta tính được $$h_0 = \frac{9}{24}$$, tức là có 37.5% các chiến binh sẽ phải kích hoạt sức mạnh tinh thần và tình bạn để đánh bại Oroku.

----

Tiếp theo, bên cạnh việc quan tâm đến xác suất một người đến được một tập từ một trạng thái, ta cũng quan tâm đến việc sau bao lâu thì một xích đạt đến trạng thái nào đó

#### Thời điểm chạm (Meantime Spent)

Ta định nghĩa thời điểm chạm là thời điểm xích chạm đến trạng thái nào đó kể từ khi xuất phát ở 1 trạng thái. 

Thời điểm chạm trung bình là số bước trung bình để xích chạm đến trạng thái $$j$$ kể từ khi xuất phát ở trạng thái $$i$$. 

Kí hiệu $$H_i^A$$ là thời điểm chạm vào tập $$A$$ của xích $$(X_n)$$ khi xuất phát từ trạng thái $$i \in I$$. Theo đó, ta có:

$$
H_i^A = \inf\{n\ge 0, X_n \in A| X_0 = i\}
$$

Do đó thời điểm chạm trung bình được xác định bởi

$$
k_i = E(H_i^A) = \sum_{n = 0}^{\infty}P[H_i^A = n]
$$

Như vậy, ta có thể tính toán được khoảng thời gian trung bình một xích Markov đến một tập trạng thái nào đó, kể từ khi bắt đầu ở trạng thái $$i \in I$$ cho trước.

Xét không gian trạng thái $$I$$ và tập $$A \subset I$$.

Thời gian trung bình của xích xuất phát từ trạng thái $$i$$ đến tập $$A$$  được xác định là nghiệm tối tiểu của hệ sau

$$
\begin{cases}
k_i = 0, \text{ if } i \in A\\
k_i = 1 + \sum_{j \in A}p_{ij}k_j, \text{ if } i \notin A
\end{cases}
$$

Ta xét một ví dụ khác. Lần này sẽ thực tế hơn một chút

Hãy xét ví dụ sau

> Một chuỗi các siêu thị gồm `BigC`. `Intimex`, `VinMart` và siêu thị đồ chơi `PowerRanger`. Xác suất người tiêu dùng chọn siêu thi cho lần mua sắm tiếp theo được cho bởi đồ thị sau:

<img src="/post_image/mathematics/2020-04-14-markov-chain-and-related-problem.assets/Graph.png" alt="Graph" style="zoom:67%;" />

Tính thời gian trung bình 1 khác hàng đi siêu thị `BigC` và sau đó đến `VinMart`.

Tương tự như phần trên, để tiện cho việc tính toán, ta sẽ thực hiện gắn nhãn cho các siêu thị này.

| SuperMarket | Label |
| ----------- | ----- |
| BigC        | 0     |
| Intimex     | 1     |
| VinMart     | 2     |
| PowerRanger | 3     |

Đặt $$k_i$$ là khoảng thời gian trung bình xích xuất phát từ trạng thái $$i$$ đến được trạng thái `2`.

Hiển nhiên thấy rằng $$k_2 = 0$$ do xích đã ở 2 rồi nên sẽ không tốn thêm bước nào để đến trạng thái `2` nữa.

- Tại `0`, ở bước kế tiếp:
  - 70% khả năng xích đến `0` và sẽ tốn trung bình $$k_0$$ bước để đến `2`
  - 10% xích đến `1` và trung bình $$k_1$$ bước để đến `2`
  - 10% xích đến `2` và $$k_2$$ bước để đến `2`
  - 10% đến `3` và $$k_3$$ bước đến `2`.
- Tương tự với các trạng thái khác

Như vậy ta có hệ phương trình sau:

$$
\begin{cases}
k_0 = 1 + 0.7k_0 + 0.1k_1 + 0.1k_2 + 0.1k_3 \\
k_1 = 1 + 0.1k_0 + 0.6k_1 + 0.1k_3 + 0.2k_3 \\
k_2 = 0 \\
k_3 = k_3
\end{cases}
$$

Các $$k_i$$ cần tìm chính là nghiệm tối tiểu của hệ phương trình trên.

Giải hệ phương trình ta được

$$
\begin{cases}
k_0 = \frac{50}{11} + \frac{6}{11}k_3\\
k_1 = \frac{40}{11} + \frac{7}{11}k_3 \\
k_2 = 0 \\
k_3 = k_3
\end{cases}
$$

Do tính tối tiểu của nghiệm, ta chọn $$k_3 = 0$$

Khi đó ta có các nghiệm như sau:

$$
\begin{cases}
k_0 = \frac{50}{11} \\
k_1 = \frac{40}{11} \\
k_2 = 0 \\
k_3 = 0
\end{cases}
$$

Vậy mất trung bình 4.55 bước để một người bắt đầu xuất phát ở `BigC` rồi sau đó đến `VinMart`



