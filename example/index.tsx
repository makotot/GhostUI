import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ReadingProgress } from '../src';

const App = () => {
  return (
    <div>
      <ReadingProgress>
        {({ percentageOfValue }) => (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
            }}
          >
            <progress
              id="reading-progress"
              value={percentageOfValue}
              max={100}
            />
          </div>
        )}
      </ReadingProgress>
      <h1>reading progress</h1>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ullamcorper
        malesuada proin libero nunc consequat interdum varius sit amet. Tempus
        egestas sed sed risus. Tellus pellentesque eu tincidunt tortor aliquam
        nulla facilisi cras. Netus et malesuada fames ac. Nunc aliquet bibendum
        enim facilisis gravida neque convallis. Eu facilisis sed odio morbi quis
        commodo odio. Enim eu turpis egestas pretium aenean pharetra magna.
        Aliquam nulla facilisi cras fermentum odio eu feugiat pretium. Molestie
        ac feugiat sed lectus vestibulum mattis ullamcorper velit sed. Sit amet
        consectetur adipiscing elit duis tristique. Morbi tincidunt augue
        interdum velit euismod in pellentesque massa. Nibh praesent tristique
        magna sit. Elit duis tristique sollicitudin nibh sit amet commodo.
        Molestie a iaculis at erat pellentesque adipiscing commodo elit. Sed
        enim ut sem viverra aliquet eget sit amet tellus. Tellus at urna
        condimentum mattis pellentesque id nibh. Vulputate odio ut enim blandit
        volutpat maecenas volutpat blandit aliquam. Sit amet nisl suscipit
        adipiscing. Consectetur adipiscing elit ut aliquam purus sit. Fusce id
        velit ut tortor pretium viverra suspendisse potenti nullam. Nunc mattis
        enim ut tellus elementum sagittis vitae. Ultricies integer quis auctor
        elit sed. Elementum sagittis vitae et leo duis ut. Sit amet mauris
        commodo quis imperdiet massa tincidunt nunc. Et malesuada fames ac
        turpis egestas integer. Arcu dui vivamus arcu felis bibendum ut. Neque
        viverra justo nec ultrices. Venenatis cras sed felis eget. Felis eget
        velit aliquet sagittis. Tempor orci dapibus ultrices in iaculis nunc sed
        augue. Mattis pellentesque id nibh tortor id. Diam vulputate ut pharetra
        sit amet aliquam. Malesuada fames ac turpis egestas. Est ante in nibh
        mauris cursus. Accumsan tortor posuere ac ut consequat semper viverra
        nam libero. Pellentesque diam volutpat commodo sed egestas egestas
        fringilla phasellus faucibus. Adipiscing diam donec adipiscing tristique
        risus nec feugiat. Porttitor massa id neque aliquam vestibulum morbi
        blandit cursus risus. Purus sit amet volutpat consequat mauris nunc
        congue. Mattis aliquam faucibus purus in massa tempor nec. Donec et odio
        pellentesque diam volutpat commodo sed. Erat nam at lectus urna duis
        convallis convallis. Quisque id diam vel quam elementum. Egestas sed sed
        risus pretium. Turpis egestas maecenas pharetra convallis posuere.
        Aliquam ultrices sagittis orci a scelerisque purus. Elit scelerisque
        mauris pellentesque pulvinar pellentesque habitant morbi tristique
        senectus. In aliquam sem fringilla ut morbi tincidunt. Amet venenatis
        urna cursus eget. Sit amet aliquam id diam maecenas. At varius vel
        pharetra vel. Ac orci phasellus egestas tellus rutrum tellus
        pellentesque. Egestas quis ipsum suspendisse ultrices gravida dictum
        fusce ut placerat. In est ante in nibh mauris cursus mattis molestie. In
        iaculis nunc sed augue lacus viverra vitae congue eu. Lobortis feugiat
        vivamus at augue. Pellentesque massa placerat duis ultricies lacus sed
        turpis. Viverra maecenas accumsan lacus vel. At auctor urna nunc id
        cursus. Dictum fusce ut placerat orci. Suscipit adipiscing bibendum est
        ultricies integer quis auctor elit sed. Etiam sit amet nisl purus in
        mollis nunc sed. Odio ut enim blandit volutpat maecenas volutpat
        blandit. Purus faucibus ornare suspendisse sed. Facilisis sed odio morbi
        quis commodo odio aenean.
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
