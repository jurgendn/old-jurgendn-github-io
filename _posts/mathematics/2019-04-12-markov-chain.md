---
layout:				post
title:				Markov Chain - Phần 1
categories:		mathematics
description:	Sơ lược về xích Markov, phần này đa phần sẽ đặt ra các khái niệm cơ bản
author:			Jurgen
toc: true
---

Đợt này sắp thi mà ngồi ôn chả thấy vào mấy, thế nên ngồi viết vậy, cũng là một lần học luôn. Mà môn này lại còn khó nữa -_-

Viết linh tinh về môn này vậy

## Động lực thúc đẩy

Rất nhiều sự kiện trong thực tế xảy ra một cách ngẫu nhiên, như sự thiết bị gặp lỗi, hay biến động trong sản lượng sản xuất, hay dễ hơn cả là tung đồng xu hoặc dice. Những sự kiện có thể xảy ra một cách ngẫu nhiên và độc lập, tuy nhiên phần nhiều trong thực tế, các sự kiện ngẫu nhiên xảy ra không hoàn toàn như vậy. Chúng ít nhiều đều có tác động bởi các trạng thái trong quá khứ. Cổ phiếu chứng khoán hoàn toàn không xảy ra ngẫu nhiên mà sẽ phụ thuộc ít nhiều vào trạng thái của nó trong các ngày trước đó.

Tất nhiên, mức độ phụ thuộc vào quá khứ là khác nhau. Có những sự kiện phụ thuộc vào rất nhiều các trạng thái trong quá khứ, cũng có những sự kiện thì lại chỉ phụ thuộc vào những trạng thái gần đây. Trong khuôn khổ bài viết, ta sẽ chỉ xét đến những sự kiện chỉ phụ thuộc vào trạng thái ngay trước đó

- Table of Content
{:toc}

## Xích Markov

### Một số khái niệm

#### 1. Quá trình ngẫu nhiên

> Quá trình ngẫu nhiên là một dãy các biến ngẫu nhiên

Một cách hình thức, một quá trình ngẫu nhiên là một dãy $$\{X_n\}_{n \ge 0}$$, trong đó $$X_i, i = \overline{0, n}$$ là các biến ngẫu nhiên

#### 2. Xích Markov

> Xích Markov là một quá trình ngẫu nhiên với không gian trạng thái $I = \left\\{i_0, i_1,...,i_n\right\\}$ thỏa mãn
>
> $$
> P\left(X_n = i_n|X_{n-1} = i_{n-1},...,X_0 = i_0\right) = P\left(X_n = i_n|X_{n-1} = i_{n-1}\right)
> $$

Một cách hình thức hơn, một xích Markov là một quá trình ngẫu nhiên mà trong đó trạng thái của quá trình trong tương lai chỉ phụ thuộc vào trạng thái của nó trong hiện tại. Ta gọi tính chất này là tính Markov (Markovian)

##### 2.1. Xích Markov thuần nhất

> Xích Markov thuần nhất là xích Markov thỏa mãn
>
> $$
> P\left(X_1 = j|X_0 = i\right) = P\left(X_{n+1}=j|X_n = i\right), \forall n \ge 0
> $$

Điều này cho thấy xác suất các trạng thái xảy ra không phụ thuộc vào thời gian. Một cách khác, kết quả của việc tung đồng xu không phụ thuộc vào thời gian, xác suất xảy ra các trạng thái là không đổi.

Ta cũng chỉ bàn đến những xích Markov thuần nhất trong khuôn khổ bài viết

##### 2.2. Không gian trạng thái. Ma trận xác suất chuyển

**Không gian trạng thái**

> Không gian trạng thái là tập hợp các trạng thái được mô tả.

Tất nhiên là cái này khá dễ và ít quan trọng

**Phân phối**

Kí hiệu $$ \displaystyle \lambda = \\{\lambda_0,..,\lambda_n\\}$$ là một phân phối của xích Markov với $$\lambda_i = P(X = i)$$

**Ma trận xác suất chuyển**

Ma trận xác suất chuyển $$P$$ là ma trận biểu diễn xác suất chuyển từ trạng thái này sang trạng thái khác của một xích Markov.

### Ma trận xác suất chuyển - Phương trình `Chapman - Kolmogorov`

#### 1. Ma trận xác suất chuyển

##### Định nghĩa

> Ma trận xác suất chuyển $P$ là ma trận biểu diễn xác suất xích chuyển sang một trạng thái từ trạng thái trước đó, là một ma trận $n \times n$ có các phần tử xác định như sau:
>
> $$
> P_{ij} = P(X_{n+1} = j|X_n = i,...,X_0 = i_0) = P(X_{n+1} = j|X_n = i)
> $$
>

Ma trận xác suất chuyển sau $n$ bước kí hiệu là $P^{(n)}$ có các phần tử xác định bởi

$$
P_{ij}^{(n)} = P(X_n = j|X_0 = i)
$$

##### Tính chất

1. $$p_{ij} \ge 0$$
2. $$\sum_{j = 1}^{n}P_{ij} = 1, \forall i \in I$$

Ta có định lí sau

**Định lí 1: Phân phối hữu hạn chiều**

> Dãy biến ngẫu nhiên $(X_n)$ nhận giá trị trong không gian trạng thái $I$ là một xích Markov $$(\lambda, P)$$ khi và chỉ khi với mọi $$i_0, i_1,..,i_n \in I$$ ta có
>
> $$
> P(X_0 = i_0, X_1 = i_1,...,X_n = i_n) = \lambda_{i_0}P_{i_0i_1}...P_{i_{n-1}i_n}
> $$

***Chứng minh***

Giả sử $$(X_n)$$ là xích Markov, khi đó ta có

$$
\begin{aligned}
P(X_0 = i_0, X_1 = i_1,...,X_n = i_n)  & = P(X_0 = i_0)P(X_1 = i_1|X_0 = i_0)...P(X_n = i_n|X_{n-1} = i_{n-1},...,X_0 = i_0) \newline
                                       & = P(X_0 = i_0)P(X_1 = i_1|X_0 = i_0)P(X_2 = i_2|X_1 = i_1)...P(X_n = i_n|X_{n-1} = i_{n-1}) \newline
                                       & = \lambda_{i_0}P_{i_0i_1}...P_{i_{n-1}i_n}
\end{aligned}
$$

Giả sử phân phối ban đầu $$P(X_0 = i_0) = \lambda_0$$.

Ta có

$$
\begin{aligned}
P(X_n = i_n|X_{n-1} = i_{n-1},..,X_0 = i_0) & = \frac{P(X_0 = i_0, X_1 = i_1,...,X_n = i_n)}{P(X_0 = i_0, X_1 = i_1,...,X_{n-1} = i_{n-1})} \newline
& = \frac{\lambda_{i_0}P_{i_0i_1}...P_{i_{n-1}i_n}}{\lambda_{i_0}P_{i_0i_1}...P_{i_{n-2}i_{n-1}}} \newline
& = P_{i_{n-1}i_n} = P(X_n = i_n|X_{n-1} = i_{n-1})
\end{aligned}
$$

Điều này chứng tỏ $$(X_n)$$ có ma trận xác suất chuyển và thỏa mãn tính Markov

Ta có điều cần chứng minh

***Hệ quả***

Với mọi $m, n \ge 0$ ta có:

1. $$P(X_n = j) = (\lambda P^{(n)})_j$$
2. $$P\left(X_n = j \mid X_0 = i\right) = P\left(X_{m+n}= j \mid X_m = i\right) = P_{ij}^{(n)}$$

##### Ví dụ

Với không gian trạng thái $$I = \\{0,1,2\\}$$ và ma trận xác suất chuyển $P$

|     | 0   | 1   | 2   |
| --- | --- | --- | --- |
| 0   | 0.7 | 0.3 | 0   |
| 1   | 0.2 | 0.6 | 0.2 |
| 2   | 0.4 | 0.1 | 0.5 |

Hãy vẽ đồ thị minh họa sơ đồ chuyển trạng thái của xích Markov trên

***Proof***

Cái này thì khá đơn giản. Một xích Markov hoàn toàn có thể được biểu diễn bởi một đồ thị có hướng, có các đỉnh là các trạng thái và các cạnh nối các đỉnh có trọng số là các phần tử của ma trận xác suất chuyển.

Ta có thể biểu diễn xích trên bằng đồ thị dưới đây


<pre class="mermaid">
flowchart LR
   2 -- 0.5 --> 2 -- 0.1 --> 1 -- 0.6 --> 1 -- 0.2 --> 0
   0(0) -- 0.3 --> 1(1) -- 0.2 --> 2(2) -- 0.4 --> 0 -- 0.7 --> 0
</pre>

#### 2. Phương trình Chapman - Kolmogorov

> Cho xích Markov $$(\lambda, P)$$ với không gian trạng thái $$I$$. Khi đó, với kí hiệu $$P^{(n)}$$ là ma trận xác suất chyển sau $$n$$ bước, ta có điều sau đây:
> $$
> P_{ij}^{(m+n)} = \sum_{r \in I}P_{ir}^{(m)}P_{rj}^{(n)}
> $$
>

***Chứng minh***

Ta có

$$
\begin{aligned}
P_{ij}^{(m+n)} & = P(X_{m+n} = j|X_{0} = i) = \sum_{r \in I}P(X_{m+n} = j, X_m = r|X_0 = i) \newline
& = \sum_{r \in I}P(X_{m+n} = j|X_m = r, X_0 = i)P(X_m = r|X_0 = i) \newline
& = \sum_{r \in I}P(X_{m+n} = j|X_m = r)P(X+m = r|X_0 = i) \newline
& = \sum_{r \in I}P_{ir}^{(m)}P_{rj}^{(n)}
\end{aligned}
$$
Ta có điều cần chứng minh.

Một cách minh họa bằng hình học có thể được biểu diễn như hình dưới đây

<img src="/post_image/mathematics/2019-04-12-markov-chain.assets/image-20200413143221094.png" alt="image-20200413143221094" style="zoom:67%;" />

Một đường đi $$i \to j$$ sau $$m+n$$ bước có thể được biểu diễn thành 2 đường đi

- Đường đi từ $$i \to r$$
- Đường đi từ $$r \to j$$

Do đó tất cả $$i \to j$$ sau $$m+n$$ bước khi đi qua bước thứ $m$ đều phải đi qua một trong các trạng thái $$r \in I$$.

**Tính chất**

1. $$P^{(1)} = P$$
   Điều này là khá hiển nhiên do $$P^{(1)}$$ là ma trận xác suất chuyển sau 1 bước
2. $$P^{(n+1)} = P^{(1)}.P^{(n)} = P.P^{(n)}$$
   Hệ quả này suy ra trực tiếp từ phương trình CK
3. $$P^{(n)} = P^{n}$$
   Chứng minh khá dễ dàng thông qua quy nạp
   - \\(P^{(1)} = P\\)
   - \\(P^{(n-1)} = P^{n-1}\\)
   - \\(P^{(n)} = P.P^{(n-1)} = P.P^{n-1} = P^{n}\\)

**Ví dụ:** Giả sử rằng thời tiết của ngày hôm sau phụ thuộc vào thời tiết của ngày hôm nay và không phụ thuộc vào những ngày trước đó. Cho rằng thời tiết gồm 2 trạng thái $$I$$ = \{không mưa, mưa\} và

- Hôm nay mưa, ngày hôm sau mưa với xác suất $$0.7$$
- Hôm nay không mưa, ngày hôm sau không mưa với xác suất $$0.6$$

> Biết rằng hôm nay không mưa, tính xác suất để 4 ngày nữa trời sẽ mưa.

Để cho tiện, ta sẽ coi mưa ứng với trạng thái 0, không mưa ứng với trạng thái 1

Không gian trạng thái `I = {0, 1}`, ma trận xác suất chuyển $$P$$

|     | 0   | 1   |
| --- | --- | --- |
| 0   | 0.7 | 0.3 |
| 1   | 0.4 | 0.6 |

Xác suất để 4 ngày nữa trời mưa nếu hôm nay không mưa chính là $$P^{(4)}_{10} = P_{10}^{4} = 0.5668$$

### Phân lớp trạng thái

Trong không gian trạng thái $$I$$, ta không chỉ quan tâm đến từng trạng thái đơn lẻ, thay vào đó ta cũng cần phải nghiên cứu về mối quan hệ giữa các trạng thái. Liệu xuất phát từ trạng thái $$i$$ ta có đến được trạng thái $$j$$ hay không? Từ trạng thái $$j$$ có thể đến được những trạng thái nào? Ta đến với một số khái niệm

**Định nghĩa 1:** Trạng thái $$i$$ có thể tới được trạng thái $$j$$  nếu tồn tại $$n$$ sao cho $$P_{ij}^{n} > 0$$

**Định nghĩa 2:** Các trạng thái $$i$$ và $$j$$ được gọi là liên thông nếu tồn tại $$m, n \ge 0$$ sao cho $$P_{ij}^n <0$$ và $$P_{ji}^m >0$$

Từ các định nghĩa trên, ta xác định được trên không gian trạng thái `I` một quan hệ tương đương là quan hệ liên thông thỏa mãn

1. \\(i \leftrightarrow i\\)
2. \\(i \to j \Rightarrow j \to i\\)
3. \\(i \to j, j \to k \Rightarrow i \to k\\)

Chứng minh không có gì khó khăn nên ta bỏ qua.

Từ đây, ta có thể phân lớp các trạng thái của xích Markov.

**Định nghĩa 3:** Lớp $$C$$ được gọi là đóng nếu $$x \in C, x \to y \Rightarrow y \in C$$

**Định nghĩa 4:** Lớp các trạng thái $$C$$ được gọi là tối giản nếu 2 trạng thái bất kì trong $$C$$ đều liên thông

Từ đây ta có thể phân lớp các trạng thái trong không gian trạng thái $$I$$ thành các thành phần nhỏ hơn

---

Tạm thời dừng ở đây đã, tớ cũng chỉ đưa ra các khái niệm đầu tiên về xích Markov, chi tiết hơn sẽ đến trong các bài sau.

## References

[1]S. M. Ross, *Introduction to Probability models*, 10th ed. Elsevier, 2010, pp. 191 - 210.

[2]R. M. Feldman and C. Valdez-Flores, *Applied Probability and Stochastic Proccesses*, 2nd ed. Springer, 2010.
