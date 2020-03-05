import rum from './design-patterns';
import liquors from './arith-metic';
import wheel from './wheel';
import * as functional from './functional';

export default {
  ...wheel, // 轮子
  ...rum, // 设计模式
  ...liquors, // 算法
  ...functional, // 函数式
}
