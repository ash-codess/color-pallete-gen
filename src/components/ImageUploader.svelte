<script>
    import styled from 'styled-components';
  
    const ImageUploaderContainer = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 2rem;
    `;
  
    const ImagePreview = styled.img`
      max-width: 100%;
      max-height: 400px;
      object-fit: contain;
      margin-bottom: 1rem;
    `;
  
    const FileInput = styled.input`
      display: none;
    `;
  
    const UploadButton = styled.label`
      display: inline-block;
      padding: 0.5rem 1rem;
      background-color: #333;
      color: #fff;
      font-weight: bold;
      cursor: pointer;
      border-radius: 4px;
      transition: background-color 0.3s ease;
  
      &:hover {
        background-color: #555;
      }
    `;
  
    let file = null;
  
    const handleFileUpload = (event) => {
      file = event.target.files[0];
    };
  </script>
  
  <ImageUploaderContainer>
    {#if file}
      <ImagePreview src={URL.createObjectURL(file)} alt="Uploaded Image Preview" />
    {/if}
    <FileInput type="file" accept="image/*" on:change={handleFileUpload} />
    <UploadButton for="file-input">Upload Image</UploadButton>
  </ImageUploaderContainer>