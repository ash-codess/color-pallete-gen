<script>
    import styled from 'styled-components';
  
    export let colors = [];
  
    const PaletteContainer = styled.div`
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-gap: 1rem;
      padding: 2rem;
    `;
  
    const ColorSwatch = styled.div`
        height: 150px;
        background-color: ${(props) => props.color};
        color: ${(props) => (isLightColor(props.color) ? '#000' : '#fff')};
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: center;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
`;
  
    const isLightColor = (color) => {
      const hex = color.replace('#', '');
      const r = parseInt(hex.substring(0, 2), 16);
      const g = parseInt(hex.substring(2, 4), 16);
      const b = parseInt(hex.substring(4, 6), 16);
      const brightness = ((r * 299) + (g * 587) + (b * 114)) / 1000;
      return brightness > 155;
    };
  </script>
  
  <PaletteContainer>
    {#each colors as color}
      <ColorSwatch color={color}>{color}</ColorSwatch>
    {/each}
  </PaletteContainer>