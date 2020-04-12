---
layout:				post
title:				Markov Chain - Phần 1
categories:		mathematics
description:	Sơ lược về xích Markov, phần này đa phần sẽ đặt ra các khái niệm cơ bản
author:			Jurgen
---

Đợt này sắp thi mà ngồi ôn chả thấy vào mấy, thế nên ngồi viết vậy, cũng là một lần học luôn. Mà môn này lại còn khó nữa -_-

Viết linh tinh về môn này vậy

## Động lực thúc đẩy

Rất nhiều sự kiện trong thực tế xảy ra một cách ngẫu nhiên, như sự thiết bị gặp lỗi, hay biến động trong sản lượng sản xuất, hay dễ hơn cả là tung đồng xu hoặc dice. Những sự kiện có thể xảy ra một cách ngẫu nhiên và độc lập, tuy nhiên phần nhiều trong thực tế, các sự kiện ngẫu nhiên xảy ra không hoàn toàn như vậy. Chúng ít nhiều đều có tác động bởi các trạng thái trong quá khứ. Cổ phiếu chứng khoán hoàn toàn không xảy ra ngẫu nhiên mà sẽ phụ thuộc ít nhiều vào trạng thái của nó trong các ngày trước đó.

Tất nhiên, mức độ phụ thuộc vào quá khứ là khác nhau. Có những sự kiện phụ thuộc vào rất nhiều các trạng thái trong quá khứ, cũng có những sự kiện thì lại chỉ phụ thuộc vào những trạng thái gần đây. Trong khuôn khổ bài viết, ta sẽ chỉ xét đến những sự kiện chỉ phụ thuộc vào trạng thái ngay trước đó

{:toc}

## Xích Markov

### Một số khái niệm

#### 1. Quá trình ngẫu nhiên

> Quá trình ngẫu nhiên là một dãy các biến ngẫu nhiên

Một cách hình thức, một quá trình ngẫu nhiên là một dãy $$\{X_n\}_{n \ge 0}$$, trong đó $$X_i, i = \overline{0, n}$$ là các biến ngẫu nhiên

#### 2. Xích Markov

> Xích Markov là một quá trình ngẫu nhiên với không gian trạng thái $$I = \{i_0, i_1,...,i_n\}$$ thỏa mãn
> 
> $$
> P_(X_n = i_n|X_{n-1} = i_{n-1},...,X_0 = i_0) = P(X_n = i_n|X_{n-1} = i_{n-1})
> $$

Một cách hình thức hơn, một xích Markov là một quá trình ngẫu nhiên mà trong đó trạng thái của quá trình trong tương lai chỉ phụ thuộc vào trạng thái của nó trong hiện tại. Ta gọi tính chất này là tính Markov (Markovian)

##### 2.1. Xích Markov thuần nhất

> Xích Markov thuần nhất là xích Markov thỏa mãn
> $$
> P(X_1 = j|X_0 = i) = P(X_{n+1}=j|X_n = i), \forall n \ge 0
> $$

Điều này cho thấy xác suất các trạng thái xảy ra không phụ thuộc vào thời gian. Một cách khác, kết quả của việc tung đồng xu không phụ thuộc vào thời gian, xác suất xảy ra các trạng thái là không đổi. 

Ta cũng chỉ bàn đến những xích Markov thuần nhất trong khuôn khổ bài viết

##### 2.2. Không gian trạng thái. Ma trận xác suất chuyển.

**Không gian trạng thái**

> Không gian trạng thái là tập hợp các trạng thái được mô tả.

Tất nhiên là cái này khá dễ và ít quan trọng

**Phân phối**

Kí hiệu $$\lambda = \{\lambda_0,..,\lambda_n\}$$ là một phân phối của xích Markov với:


$$
\lambda_i = P(X = i)
$$
**Ma trận xác suất chuyển**

Ma trận xác suất chuyển $$P$$ là ma trận biểu diễn xác suất chuyển từ trạng thái này sang trạng thái khác của một xích Markov.

### Ma trận xác suất chuyển - Phương trình `Chapman - Kolmogorov`

#### 1. Ma trận xác suất chuyển

##### Định nghĩa

> Ma trận xác suất chuyển $$P$$ là ma trận biểu diễn xác suất xích chuyển sang một trạng thái từ trạng thái trước đó, là một ma trận $$n \times n$$ có các phần tử xác định như sau:
> $$
> P_{ij} = P(X_{n+1} = j|X_n = i,...,X_0 = i_0) = P(X_{n+1} = j|X_n = i)
> $$
> 

Ma trận xác suất chuyển sau $$n$$ bước kí hiệu là $$P^{(n)}$$ có các phần tử xác định bởi


$$
P_{ij}^{(n)} = P(X_n = j|X_0 = i)
$$


##### Tính chất

1. $$p_{ij} \ge 0$$
2. $$\sum_{j = 1}^{n}P_{ij} = 1, \forall i \in I$$

Ta có định lí sau

**Định lí 1: Phân phối hữu hạn chiều**

> Dãy biến ngẫu nhiên $$(X_n)$$ nhận giá trị trong không gian trạng thái $$I$$ là một xích Markov $$(\lambda, P)$$ khi và chỉ khi với mọi $$i_0, i_1,..,i_n \in I$$ ta có
> $$
> P(X_0 = i_0, X_1 = i_1,...,X_n = i_n) = \lambda_{i_0}P_{i_0i_1}...P_{i_{n-1}i_n}
> $$

***Chứng minh***

$$\Rightarrow$$ Giả sử $$(X_n)$$ là xích Markov, khi đó ta có


$$
\begin{aligned}
P(X_0 = i_0, X_1 = i_1,...,X_n = i_n) & = P(X_0 = i_0)P(X_1 = i_1|X_0 = i_0)...P(X_n = i_n|X_{n-1} = i_{n-1},...,X_0 = i_0) \\
& = P(X_0 = i_0)P(X_1 = i_1|X_0 = i_0)P(X_2 = i_2|X_1 = i_1)...P(X_n = i_n|X_{n-1} = i_{n-1}) \\
& = \lambda_{i_0}P_{i_0i_1}...P_{i_{n-1}i_n}
\end{aligned}
$$
$$\Leftarrow$$ Giả sử phân phối ban đầu $$P(X_0 = i_0) = \lambda_0$$.

Ta có
$$
\begin{aligned}
P(X_n = i_n|X_{n-1} = i_{n-1},..,X_0 = i_0) & = \frac{P(X_0 = i_0, X_1 = i_1,...,X_n = i_n)}{P(X_0 = i_0, X_1 = i_1,...,X_{n-1} = i_{n-1})} \\
& = \frac{\lambda_{i_0}P_{i_0i_1}...P_{i_{n-1}i_n}}{\lambda_{i_0}P_{i_0i_1}...P_{i_{n-2}i_{n-1}}} \\
& = P_{i_{n-1}i_n} = P(X_n = i_n|X_{n-1} = i_{n-1})
\end{aligned}
$$
Điều này chứng tỏ $$(X_n)$$ có ma trận xác suất chuyển và thỏa mãn tính Markov

Ta có điều cần chứng minh

***Hệ quả***

Với mọi $$m, n \ge 0$$ ta có:

1. $$P(X_n = j) = (\lambda P^{(n)})_j$$
2. $$P(X_n = j|X_0 = i) = P_(X_{m+n}= j|X_m = i) = P_{ij}^{(n)}$$

##### Ví dụ:

Với không gian trạng thái `I = {0,1,2}` và ma trận xác suất chuyển $$P$$

| 0.7  | 0.3  | 0    |
| ---- | ---- | ---- |
| 0.2  | 0.6  | 0.2  |
| 0.4  | 0.1  | 0.5  |

Hãy vẽ đồ thị minh họa sơ đồ chuyển trạng thái của xích Markov trên

***Proof***

Cái này thì khá đơn giản. Một xích Markov hoàn toàn có thể được biểu diễn bởi một đồ thị có hướng, có các đỉnh là các trạng thái và các cạnh nối các đỉnh có trọng số là các phần tử của ma trận xác suất chuyển. 

Ta có thể biểu diễn xích trên bằng đồ thị dưới đây

![Graph-1586720602019](markov-chain.assets/Graph-1586720602019.png)