<p dir="rtl">
<h3><a href="https://github.com/kuwaitcodes/KC-web-cw-7">تمرين </a></h3></p>


<p dir="rtl">
اليوم راح راح نحسب مؤشر وزن الجسم ⚖️!</p>
<h1></h1>
<p dir="rtl">
 <strong>جاااهزييين؟ 😍</strong></p>




1. قم بعمل fork للـ repository
2. افتح الـ repository باستخدام github desktop
3. افتح ملف script.js وابدأ الحل
4. عرف دالة BMI تستقبل معاملين (weight, height)
    - ستخدم المعادلة التالية لحساب مؤشر وزن الجسم، ثم قم بحفظ الناتج في متغير result:
    <br><code>weight / (height * height)</code>
    - ارجع result بإستخدام كلمة return
5. قم بمناداة الدالة BMI داخل console.log ولا تنسى كتابة المعاملات
6. عرف الدالة المرجعة Status التي ستستقبل معامل bmi, وترجع لنا قيمة على المقياس التالي (return):
<div dir="rtl">
  <table>
    <tr><td>return</td><td>bmi</td></tr>
    <tr><td>"لديك نقص في الوزن"</td><td>< 18.5</td></tr>
    <tr><td>"وزنك صحي"</td><td>>= 18.5 && < 25</td></tr>
    <tr><td>"لديك زيادة في الوزن"</td><td>>= 25</td></tr>
  </table>
</div>
<p dir="rtl">
7. إذهب إلى وسم h2 في صفحة HTML واستخدم حدث onclick وقم بإستدعاء الدوال التالية:
    <br> <code>alert(Status(BMI(80, 1.8)))</code>
    
8. عرف دالة calculate لتعمل الخطوات التالية عند مناداتها:
    - احفظ قيمة الوزن التي في حقل الإدخال في متغير weight
    <br />`مساعدة: let weight = document.getElementById(...).value`
    - احفظ قيمة الطول التي في حقل الادخال في متغير height
   <br />`مساعدة: let height = document.getElementById(...).value`
    - أنشئ متغير bmi قيمته هي دالة ()BMI، ولا تنسى استخدام الweight والheight في معاملات الدالة
    - انشى متغير desc قيمته هي دالة ()Status، ولا تنسى استخدام المتغير bmi الذي انشأته في الخطوة السابقة في معاملات الدالة
    - أنشئ متغير div قيمته هي الوسم الضي يحمل هوية result
    <br />`مساعدة: let div = document.getElementById('result')`
    - غير النص الداخلي للعنصر div واجعل قيمته كالأتي:
    <br/>`bmi + " == " + desc`
9. اضف حدث onclick إلى الزر ليستدعي دالة calculate
10. احفظ اتغيرات وارفع الكود إلى github
11. قم بتسليم التمرين على موقع Coded lab

</p>

 <p dir="rtl">
<strong>بونص! ✨</strong></p>

- قم بكتابة معاملات افتراضية للدالة ()BMI، وكرر الخطوة 5 بدون معاملات!
- قم بإستخدام حدث onmouseover بدلاً من onclick في الخطوة 7
- قم بالتعبير عن كل حالة من الحالات الموجودة في الجدول بتغيير لون النص، مثلا: 
    - لديك نقص في الوزن  <- باللون البرتقالي
    - وزنك صحي <- باللون الاخضر
    - لديك زيادة في الوزن <- باللون الاحمر

 <p dir="rtl">
 "لا تترددون أنكم تسألون المدرسين 👌"
</p>
