"use strict";

/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: liyue
 * @Date: 2020-12-23 19:35:25
 * @LastEditors: liyue
 * @LastEditTime: 2020-12-23 19:35:50
 * @FilePath: \vue-martd:\a_study\DEV\kaikeba\Algorithms\Algorithms\堆\remove.js
 */
//删除最小值
(void 0).remove_min = function () {
  if (curr_size <= 0) {
    return null;
  }

  var min_value = heap[0];
  heap[0] = heap[curr_size - 1];
  curr_size--;
  shif_down(0, curr_size - 1);
  return min_value;
};