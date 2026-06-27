# CSS Positioning

### Positioning controls:

- where elements appear
- how they move
- what they are positioned relative to
- whether they stay in normal layout flow


---


#### Default Behavior

'''css
position: static;
'''
- There are 5 major values:-

1. static
2. relative
3. absolute
4. fixed
5. sticky


---


### What Is Normal Flow?

- HTML elements naturally stack in order.


'''html

<div>One</div>
<div>Two</div>
<div>Three</div>

'''

One
Two
Three

---

#### Some Position Values REMOVE Elements From Flow

- This changes layout behavior completely.
 


----


1. position: static

Default positioning

#### characteristics

✔ Default behavior
✔ Stays in normal flow
✘ top/left/right/bottom don't work


'''css

.box{
   position:static;
   top:50px;
}

'''

top does NOTHING.

----



2. position: relative


#### characteristics

✔ Stays in normal flow
✔ Can use top/left/right/bottom
✔ Original space is preserved
✔ Becomes positioning reference for absolute children


'''css
.box{
   position:relative;
   top:20px;
   left:30px;
}

'''

What Happens?

Element MOVES visually:

20px down
30px right

BUT:

Original space remains reserved.



#### visual


BOX1
BOX2
BOX3



BOX1

      BOX2

BOX3



Notice:

BOX3 does NOT move upward
original BOX2 space still exists



---

Example:-

'''css
.parent{
   position:relative;
}
'''


Now absolute children position relative to parent.

Without this:

they position relative to viewport/page


-----



3. position: absolute



#### characteristics

✔ Removed from normal flow
✔ No space reserved
✔ Positioned relative to nearest positioned ancestor
✔ Can use top/left/right/bottom


##### HUGE CONCEPT

"Nearest Positioned Ancestor"

Absolute elements search upward for parent with:
position:
relative
absolute
fixed
sticky

If none found:
positions relative to viewport/page


Example:
'''html
<div class="parent">
   <div class="child"></div>
</div>
'''

'''css

.parent{
   position:relative;
   width:300px;
   height:300px;
   background:red;
}

.child{
   position:absolute;
   top:0;
   right:0;
   width:50px;
   height:50px;
   background:blue;
}

'''

##### Result

Blue box appears at:
top-right of red parent
Because parent is relative.

----


### position fixed

position: fixed in CSS is used to place an element relative to the browser viewport (the visible screen area), not relative to its parent.


#### How it works?


the element is removed from the normal document flow and positioned using:

top
right
bottom
left

relative to the viewport.

- Other elements behave as if the fixed element does not exist.

----


### position fixed

- position: sticky is a combination of:

relative
and fixed

An element behaves like a normal element initially, but when the page reaches a certain scroll position, it becomes “stuck” to a specified position.



----



