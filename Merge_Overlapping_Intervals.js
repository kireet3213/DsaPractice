
const merge = intervals => {
    if (intervals.length < 2) return intervals;
    
    intervals.sort((a, b) => a[0] - b[0]);
    const result = [];
    let previous = intervals[0];
    
    for (let i = 1; i < intervals.length; i += 1) {
      if (previous[1] >= intervals[i][0]) {
        previous = [previous[0], Math.max(previous[1], intervals[i][1])]; 
        console.log("previous",previous);
      } else {
        result.push(previous);
        previous = intervals[i];
      }
    }
    result.push(previous);
    
    return result;
  };

  console.log(merge([[1,3],[8,10],[2,6],[15,18]]));