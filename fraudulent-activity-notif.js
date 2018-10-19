/* 
HackerLand National Bank has a simple policy for warning clients about possible fraudulent account activity. If the amount spent by a client on a particular day is greater than or equal to  the client's median spending for a trailing number of days, they send the client a notification about potential fraud. The bank doesn't send the client any notifications until they have at least that trailing number of prior days' transaction data.
Given the number of trailing days  and a client's total daily expenditures for a period of  days, find and print the number of times the client will receive a notification over all  days.
For example,  and . On the first three days, they just collect spending data. At day , we have trailing expenditures of . The median is  and the day's expenditure is . Because , there will be a notice. The next day, our trailing expenditures are  and the expenditures are . This is less than  so no notice will be sent. Over the period, there was one notice sent.
Note: The median of a list of numbers can be found by arranging all the numbers from smallest to greatest. If there is an odd number of numbers, the middle one is picked. If there is an even number of numbers, median is then defined to be the average of the two middle values. (Wikipedia)

Function Description
Complete the function activityNotifications in the editor below. It must return an integer representing the number of client notifications.
activityNotifications has the following parameter(s):

expenditure: an array of integers representing daily expenditures
d: an integer, the lookback days for median spending

Input Format

The first line contains two space-separated integers  and , the number of days of transaction data, and the number of trailing days' data used to calculate median spending. 
The second line contains  space-separated non-negative integers where each integer  denotes .

Constraints

Output Format

Print an integer denoting the total number of times the client receives a notification over a period of  days.

Sample Input 0

9 5
2 3 4 2 3 6 8 4 5

Sample Output 0

2

Explanation 0

We must determine the total number of  the client receives over a period of  days. For the first five days, the customer receives no notifications because the bank has insufficient transaction data: .
On the sixth day, the bank has  days of prior transaction data, , and  dollars. The client spends  dollars, which triggers a notification because : .
On the seventh day, the bank has  days of prior transaction data, , and  dollars. The client spends  dollars, which triggers a notification because : .
On the eighth day, the bank has  days of prior transaction data, , and  dollars. The client spends  dollars, which does not trigger a notification because : .
On the ninth day, the bank has  days of prior transaction data, , and a transaction median of  dollars. The client spends  dollars, which does not trigger a notification because : .

Sample Input 1

5 4
1 2 3 4 4

Sample Output 1

0

There are  days of data required so the first day a notice might go out is day . Our trailing expenditures are  with a median of  The client spends  which is less than  so no notification is sent.
 */
 
 
 
 /* 
 2,3,4,2,3,6,8,4,5
 
 var notif = 0;
 
6th day (median of last five 2,2,3,3,4, is 3)
2,3,4,2,3,   6 usd				,8,4,5

notif cause 6(spent) => 3*2			// notif++


7th day (median of last five is 2,3,3,4,6 is 3)
3,4,2,3,6, 8 usd				,4,5

notif cause 8(spent) not => 3*2		// notif++


8th day (median of 2,3,4,6,8 is 4)
4,2,3,6,8, 4 usd			,5

no notif cause 4(spent) not => 4*2


9th day (median of 2,3,4,6,8 is 4)
2,3,6,8,4  ,5 usd

no notif cause 5(spent) not => 4*2


total of notif 	: 2

 */

/* 
	expenditures: array of daily expenditures
	d: an integer, the lookback days for median spending
	
 */
function activityNotifications( expenditures, d){

	console.log('Handle process for expenditures: '+expenditures);
	
	var median = idxMedian = spend = countNotif = 0;
	
	for(var i=0;i<expenditures.length;i++){
	
		// console.log( 'expends for day i '+(i+1)+': '+expenditures[i] );
		
		if( (i+1) <= d){
			console.log('skip for idx, loopack days ('+d+') too small');
			continue;
		}
		
		/* consider previous N loopback days and sort them */
		
		var arrayLoopbacks = expenditures.slice((i-d),(i-d)+d);
		
		arrayLoopbacks.sort( function(a,b){
			return a-b;
		} );
		
		/* pick up median */
		
		// 1,2,3,4,5,6,7,8
		
		if(	arrayLoopbacks.length % 2 == 0	){
		
			// console.log('median is the division of two numbers');
			idxMedian = parseInt( ( arrayLoopbacks.length/2 )-1 );
			median = ( arrayLoopbacks[idxMedian]+arrayLoopbacks[idxMedian+1] ) / 2;
			
		}else{
			
			idxMedian = parseInt( ( arrayLoopbacks.length/2 ) );
			median = arrayLoopbacks[idxMedian];

		}

		console.log('i='+i+', median='+median+', expends='+expenditures[i]);

		/* handle notif */		// notif cause 8(spent) not => 3*2		// notif++
		
		spend = expenditures[i];
		
		if( spend >= (median*2 ) ){
			countNotif++;
		}
		
	
	}
	
	console.log('RESULT: notifications raised : '+countNotif);

	 
}




activityNotifications([2,3,4,2,3,6,8,4,5],5);

console.log('end of program');

activityNotifications([1,2,3,4,4],5);

console.log('end of program');

