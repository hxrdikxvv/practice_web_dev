# Flexbox
1-D layout system 


## Important 
Main Axis VS Cross Axis

Default direction of flex is row.


MAIN AXIS → horizontal
CROSS AXIS → vertical

---

'''css
flex-direction:column;
'''


MAIN AXIS ↓ vertical
CROSS AXIS → horizontal


---

### Important Rule

1. justify-content
Controls alignment along MAIN AXIS.

2. align-items
Controls alignment along CROSS AXIS.
 

- Example

'''css
.container{
    display:flex;
    justify-content:center;
    align-items:center;
}
'''

justify-content → horizontal centering
align-items → vertical centering

---


### Important Concepts

'''css
flex-direction:row-reverse;
'''
[3] [2] [1]




'''css
justify-content:center;
'''
|   [1][2][3]   |


flex-end
|          [1][2][3]|


space-between
|[1]      [2]      [3]|


space-around





space-evenly


---


ALIGN-ITEMS
stretch(default)-items stretch full height.


flex-start
Top align.



flex-end
Bottom align.


---


flex-wrap

nowrap(default) - By default Flexbox tries to fit everything in one line, this can cause shrinking.



'''css
flex-wrap:wrap; 
'''
Allows items to move next line.


product cards:- example 
[1][2][3][4]
[5][6][7][8]




gap:20px creates spacing between flex items.


---


### Flex item properties


- flex-grow

controls how items grow 

'''css
.items{
    flex-grow:1;
}
.item2{
   flex-grow:2;
}
'''

Visual

[item1][     item2     ]



- flex-shrink

controls shrinking behavior

flex-shrink:1 - Items can shrink


- flex-basis
Initial size before grow/shrink.
'''css
flex-basis:200px;
'''

---

#### flex shorthand
flex: grow shrink basis;

flex:1;
means
grow:1
shrink:1
basis:0

