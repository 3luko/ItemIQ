<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>ItemIQ</title>
    <link rel="stylesheet" href="./style.css">
    <link rel="icon" href="./favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"/>
  </head>
  <body>
    <main>
        <h1>Menu</h1>  
        <div class="createNclear">
            <button type="button" id="boxButton" onclick="showMenu()">Create Slot</button>
            <button type="button" id="clearButton" onclick="clearDiv()">Clear Slots</button>
            <span style="margin-left : 7em">Total Amount: <span>$<strong id="totalAmount">0</strong></span></span>
        </div>
        <div class="quickMenu">
          <input type="text" id="name" placeholder="item name"><br>
          <input type="text" id="size" placeholder="item size"><br>
          <input type="number" id="price" placeholder="item price"><br>
          <button class="btn btn-default" type="button" id="submitMenu" onclick="submitMenu()">Submit Slot</button>
          <button class="btn btn-default"type="button" id="clearMenu" onclick="clearMenu()">Clear Menu</button>
        </div>
        <div id="inventoryContainer">

        </div>

    </main>
	<script src="script.js"></script>
  </body>
</html>