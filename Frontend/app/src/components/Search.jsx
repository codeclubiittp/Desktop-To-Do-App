import React, { useState } from "react";
import styled from "styled-components";

// Styled Components
const PageContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background-color: #f5f7f8;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #2c6355;
  margin-bottom: 8px;
`;

const Description = styled.p`
  font-size: 16px;
  color: #6a9f90;
  margin-bottom: 32px;
`;

const SearchContainer = styled.div`
  position: relative;
  width: 400px;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background-color: #edf4f3;
  border-radius: 20px;
  padding: 8px 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const SearchInput = styled.input`
  flex: 1;
  border: none;
  background-color: transparent;
  font-size: 16px;
  color: #2c6355;
  outline: none;

  &::placeholder {
    color: #6a9f90;
  }
`;

const SearchIcon = styled.button`
  background: #2c6355;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  svg {
    color: #fff;
    width: 16px;
    height: 16px;
  }
`;

const SuggestionsList = styled.ul`
  list-style: none;
  margin: 4px 0 0;
  padding: 0;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: absolute;
  width: 100%;
  z-index: 10;
`;

const SuggestionItem = styled.li`
  padding: 10px 16px;
  cursor: pointer;
  color: #2c6355;
  background-color: ${(props) => (props.isHighlighted ? "#edf4f3" : "#ffffff")};

  &:hover {
    background-color: #edf4f3;
  }
`;

// Main Search Component
const SearchComponent = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([
    "Inbox",
    "Upcoming",
    "Today",
    "Labels",
    "Projects",
    "Tasks",
    "Meetings",
  ]);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [highlightIndex, setHighlightIndex] = useState(-1);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim() === "") {
      setFilteredSuggestions([]);
      return;
    }

    // Filter suggestions
    const filtered = suggestions.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredSuggestions(filtered);
    setHighlightIndex(-1); // Reset highlight
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      setHighlightIndex((prev) =>
        prev < filteredSuggestions.length - 1 ? prev + 1 : 0
      );
    } else if (e.key === "ArrowUp") {
      setHighlightIndex((prev) => (prev > 0 ? prev -1 : filteredSuggestions.length - 1));
    } else if (e.key === "Enter") {
      if (highlightIndex >= 0) {
        setQuery(filteredSuggestions[highlightIndex]);
        setFilteredSuggestions([]);
      }
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    setFilteredSuggestions([]);
  };

  return (
    <PageContainer>
      <Title>Search Tasks</Title>
      <Description>Find your tasks, labels, or projects with a quick search below.</Description>
      <SearchContainer>
        <SearchBar>
          <SearchInput
            type="text"
            placeholder="Search..."
            value={query}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <SearchIcon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M16.65 10.35a6.3 6.3 0 11-12.6 0 6.3 6.3 0 0112.6 0z"
              />
            </svg>
          </SearchIcon>
        </SearchBar>
        {filteredSuggestions.length > 0 && (
          <SuggestionsList>
            {filteredSuggestions.map((item, index) => (
              <SuggestionItem
                key={index}
                isHighlighted={index === highlightIndex}
                onMouseEnter={() => setHighlightIndex(index)}
                onClick={() => handleSuggestionClick(item)}
              >
                {item}
              </SuggestionItem>
            ))}
          </SuggestionsList>
        )}
      </SearchContainer>
    </PageContainer>
  );
};

export default SearchComponent;
