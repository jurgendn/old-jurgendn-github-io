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

