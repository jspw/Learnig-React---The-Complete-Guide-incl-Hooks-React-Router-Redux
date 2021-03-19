import React from "react";
import { connect } from "react-redux";

const SongDetail = (props) => {
  const songDetail = props.selectedSong;
  return (
    <div style={{ alignItems: "center",alignContent:'center' }}>
      <div style={{  }}>
        <h3>Song Detail</h3>
      </div>
      <div>
        {songDetail ? (
          <>
            <p>{songDetail.title}</p>
            <p>{songDetail.duration}</p>{" "}
          </>
        ) : (
          <h4>Select A Song</h4>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedSong: state.selectedSong,
  };
};

export default connect(mapStateToProps)(SongDetail);
