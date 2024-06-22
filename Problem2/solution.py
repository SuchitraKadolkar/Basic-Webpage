arr = input()
n = len(arr)
farthest = 0
planes_cnt = 0
next_step = 0
        
for i in range(n - 1):
  farthest = max(i + nums[i], farthest)
  if i == next_step:
    next_step = farthest
    planes_cnt += 1    
return planes_cnt
