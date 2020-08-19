# Hidden Markov Model - Part 2

Nhân một ngày vừa thi xong mà cảm thấy rất khó chịu nên là mình sẽ ngồi viết văn vậy.

Tiếp theo bài lần trước về HMM, hôm nay chúng ta sẽ đến với cách giải quyết vấn đề của Khá.

Tổng kết lại, ở bài trước, chúng ta đã có được cái nhìn sơ bộ về xích Markov và ba bài toán cơ bản của mô hình này.

- Likelihood
- Decoding
- Learning

Bài viết này sẽ trình bày rõ hơn về phương pháp tán gái của Khá.

- Table of Content
{:toc}
Qua nhiều lần gửi thư cho nàng, Khá tổng hợp lại và được bộ dữ liệu quan sát như sau

| 1    | 2    | 3    | 4    | 5    | 6    | 7    | 8    | 9    | 10   | 11   | 12   | 13   | 14   | 15   | 16   | 17   | 18   | 19   | 20   |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 0    | 0    | 0    | 0    | 1    | 1    | 0    | 1    | 0    | 0    | 1    | 1    | 1    | 0    | 0    | 1    | 0    | 1    | 1    | 0    |

> Nhìn hơi nhiều số 0.

Ở bài đây, Khá có các quan sát $$O$$, ngoài ra không có thông tin gì khác. Với giả định chỉ có $$\{\text{vui, buồn}\}$$  tác động đến việc gửi thư của người yêu, Khá có mô hình như sau:

[Hình ảnh mô hình]

Các tham số cần ước lượng:

1. Phân phối ban đầu $$\pi=\left(\pi_{1},\pi_{2}\right)$$, đây chính là xác suất của trạng thái xuất phát, rằng thời điểm đầu tiên nàng đang vui hay đang buồn
2. Ma trận xác suất chuyển $$A=\left(a_{ij}\right)$$
3. Phân phối phụ thuộc trạng thái $$P=\left(p_{1},p_{2}\right)$$.

Sau khi ước lượng được các tham số trên, ta đã có thể mô hình hóa được quá trình gửi thư của con gái Huấn đại hiệp.

## Xác định mô hình

> Chương trình ở đây viết bằng `python`.

Đầu tiên, xác định một class là HMM đã.

```python
import scipy as sp
import numpy as np
from scipy import stats
from scipy.special import logsumexp
from numpy import seterr


class HMM:
    def __init__(self, init_delta, init_theta, init_lambdas,tol=1e-6):
        seterr(divide='ignore')
        self.nstates = len(init_delta)
        self.delta = np.log(init_delta)
        self.theta = np.log(init_theta)
        self.lambdas = np.array(init_lambdas)
        self.tol = tol
        seterr(divide='warn')
```

Vì số liệu tính toán rất nhỏ, đâu đó cỡ $$10^{-n}$$ với $$n$$ khá lớn, do đó ta sử dụng $$\log$$ để đảm bảo độ chính xác cũng như tránh trường hợp xác suất bằng $$0$$.

Hàm dưới đây cho ta biết xác suất $$\log$$ xác suất $$P\left(O_{t}=i,H_{t=j}\mid\lambda\right)$$

```python
    def forward_lprobs(self, seq):
        seterr(divide='ignore')
        g_1 = [self._sp_lpmf(self.lambdas[i], seq)
               for i in range(self.nstates)]
        g_1 = np.add(self.delta, g_1)
        glst = [g_1]
        for i in range(1, len(seq)):
            g_i = []
            for j in range(self.nstates):
                prev = np.add(glst[-1], self.theta[::, j])
                prev = logsumexp(prev)
                g_ij = prev + self._sp_lpmf(self.lambdas[j], seq)
                g_i.append(g_ij)
            glst.append(g_i)
        seterr(divide='warn')
        return np.array(glst)
```

