import React from 'react'

const SimpleModalExample = () => (
    <div classNameName="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div classNameName="modal-dialog">
    <div classNameName="modal-content">
      <div classNameName="modal-header">
        <h5 classNameName="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" classNameName="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div classNameName="modal-body">
        ...
      </div>
      <div classNameName="modal-footer">
        <button type="button" classNameName="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" classNameName="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
  );
  

export default SimpleModalExample;