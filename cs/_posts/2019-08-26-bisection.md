---
layout: post
title: Giải phương trình bằng phương pháp chia đôi
categories: [cs]
comments: true
description:    >
    Mô tả viết cho có thôi, chứ mô tả chính là tiêu đề rồi
---
Thực ra thì phương pháp này dễ lắm, mình viết lại cho chắc cú thôi. 
Trước hết, cần làm rõ điều này. Máy tính hiểu một số như nào? Thế nào là $$\sqrt{2}$$? Lẽ dĩ nhiên, $$\sqrt{2}$$ là biểu thức số, không phải là một số. Khi đọc vào máy tính $$\sqrt{2}$$, con số được sử dụng tính toán hiển nhiên không phải là $$\sqrt{2}$$, thay vào đó, con số đó sẽ là $$1.41,1.414,1.4142,...$$ tùy thuộc vào mức độ chính xác mà người sử dụng yêu cầu. Tất nhiên, giải đúng được một phương trình sẽ tốt hơn, mà điều khó là không phải lúc nào cũng có thể giải dúng được phương trình. Những phương trình đa thức có lẽ là dạng đơn giản nhất, thế nhưng đối với một phương trình đa thức có bậc lớn hơn 4, ta đã không thể giải được tổng quát, mà chỉ giải được một số lớp bài toán nhất định. Chính vì thế, câu chuyện tính xấp xỉ nghiệm của phương trình có vẻ khả thi hơn là giải đúng.  