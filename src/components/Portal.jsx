import { useEffect } from "react";
import { createPortal } from "react-dom";

export default function Portal(props) {
  const { children, handleToggleModal } = props

  // Handle escape key to close modal
  useEffect(() => {
    function handleEscapeKey(event) {
      if (event.key === 'Escape') {
        handleToggleModal()
      }
    }

    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleEscapeKey)

    return () => {
      document.body.style.overflow = 'unset'
      document.removeEventListener('keydown', handleEscapeKey)
    }
  }, [handleToggleModal])

  return createPortal(
    <div className="portal-container">
      <div className="portal-bg" onClick={handleToggleModal}></div>
      <div className="portal-content">
        {children}
      </div>
    </div>,
    document.getElementById('portal')
  )
}