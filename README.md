
设计一个定时任务，定时去接口那里获取数据，当前的期数，当前开奖号码数。5分钟去捞取一次数据。
捞出来后放入阻塞队列。
处理线程处理数据。

数据存储使用redis。rdb持久化。

当前用户全局只有一个右侧组合数据列，新增一个条件。生成一个集合
后续增加的条件不断和数据列作交集。  
1228号任务：页面简化成设计原型，选择基本走势。返回组合总数，和组合数据列。
组合数据列缓存起来。
一个用户只有一个组合列表

产生条件和数据集合分开。条件str-list  
综合数据集则获取所有的集合进行取交集。
//1229
选取重复条件



