import React, { useEffect } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import { useNavigate } from "react-router-dom";
import './VoiceSearch.css';

function VoiceSearch({ products, searchProduct, setSearchProduct }) {
  const navigate = useNavigate();


// This hook (useSpeechRecognition) comes from the react-speech-recognition library.
// It gives you live values:
// transcript → the text that comes from your voice (speech-to-text).
// listening → a boolean (true/false) that tells if the microphone is currently listening.

// Think of it as:
//  You speak → library listens → updates transcript and listening.




// startListening() → starts mic.
// You speak → library converts voice to text.
// transcript updates automatically.
// useEffect reacts to transcript changes → updates search input.
//  No need to pass transcript anywhere—it’s handled internally by the library.

  const { transcript, listening } = useSpeechRecognition();

  // auto-fill search bar when voice finishes
  useEffect(() => {
    if (transcript) {
      setSearchProduct(transcript);
    }
  }, [transcript, setSearchProduct]);

//   1)  starts listening and continous make false(stop listening) after one phrase , language english- India
  const startListening = () => {
    SpeechRecognition.startListening({ continuous: false, language: "en-IN" });
  };





  // filter for auto suggestions
 let filterData = products.filter((item) =>
  item.name.toLowerCase().includes(searchProduct.toLowerCase().trim()) ||
  item.description.toLowerCase().includes(searchProduct.toLowerCase().trim())
);


  return (
    <div className="col-md-4 position-relative">
      <div className="input-group" style={{ maxWidth: "100%" }}>
        {/* Search Icon */}
        <span className="input-group-text bg-white border-start-0 rounded-start-pill">
          <i className="bi bi-search"></i>
        </span>

        {/* Input Field */}
        <input
          type="text"
          className="form-control border-start-0"
          placeholder="Search food"
          value={searchProduct}
          onChange={(e) => setSearchProduct(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && filterData.length > 0) {
              navigate(`/product/${filterData[0].id}`);
              setSearchProduct("");
            }
          }}
        />



        {/* Mic Button */}
        <button
          className="btn rounded-end-pill bg-white"
          type="button"
          onClick={startListening}
          style={{ borderStyle: "none" }}
        >
          <i
            className={`bi bi-mic-fill ${listening ? "text-danger" : "text-secondary"}`}
            style={{ fontSize: "1.2rem" }}
          ></i>
        </button>
      </div>


      {/* Auto-suggestions */}
      {searchProduct && (
        <ul
          className="list-group position-absolute w-100 shadow mt-1 overflow-auto voice-suggestion-list"
          style={{ zIndex: 1000, maxHeight: "250px" }}
        >

          {filterData.length > 0 ? (
            filterData.map((item) => (
              <li
                key={item.id}
                className="list-group-item "
                style={{ cursor: "pointer", 
                  display: "block", 
                  alignItems: "center",
                  justifyContent:"space-around"
                 }}
                onClick={() => {
                  navigate(`/product/${item.id}`);
                  setTimeout(() => setSearchProduct(""), 200);
                }}
              >
                <img
                  src={item.imageurl}
                  alt={item.name}
                  style={{
                    width: "30px",
                    height: "30px",
                    objectFit: "cover",
                    marginRight: "30px",
                    borderRadius: "5px",
                  }}
                />
                {item.name}
              </li>
            ))
          ) : (
            <li className="list-group-item text-danger">No results found</li>
          )}
        </ul>
      )}
    </div>
  );
}

export default VoiceSearch;
