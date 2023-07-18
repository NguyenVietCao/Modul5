let courses = [ 
    { 
      id: 1, 
      title: "ReactJS Tutorial", 
      rating: 4.2, 
    }, 
    { 
      id: 2, 
      title: "Angular Tutorial", 
      rating: 2.5, 
    }, 
    { 
      id: 3, 
      title: "VueJS Tutorial", 
      rating: 3.8, 
    }, 
    { 
      id: 4, 
      title: "Java Tutorial", 
      rating: 4, 
    }, 
    { 
      id: 5, 
      title: "JavaScript Tutorial", 
      rating: 3.5, 
    }, 
  ];
// Bai 1: Lọc đối tương rating lớn hơn 4 
  let ratingMore4 = courses.filter((obj)=>{
    return obj.rating >= 4;
  });
  console.log(ratingMore4);

  // Bai 2:Yêu cầu 2: Sử dụng cú pháp ES6 để xuất ra màn hình danh sách các bài đăng có rating < 4 với yêu cầu giá trị các phần tử của mảng mới có định dạng: 		
// <id> - <title> - <rating>	

let ratingLess4 = courses.filter((obj)=>{
    return obj.rating <4;
}).map((obj)=>{
   return obj.id +"-"+ obj.title +"-"+ obj.rating;
});

console.log(ratingLess4);

// Yêu cầu 3: Sử dụng cú pháp ES6 đã học viết hàm trả về một mảng mới gộp 2 mảng courses và addedCourses							

let addedCourses = [ 
    { 
      id: 6, 
      title: "PHP Tutorial", 
      rating: 3, 
    }, 
    { 
      id: 7, 
      title: "C# Tutorial", 
      rating: 2, 
    }, 
    { 
      id: 8, 
      title: "Docker Tutorial", 
      rating: 3.8, 
    } 
  ]; 
  let mergeArray = function (x,y) {
    return [...x,...y];
  };

  console.log(mergeArray(courses,addedCourses));
